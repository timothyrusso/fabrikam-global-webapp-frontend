import * as React from 'react';
import { ChakraProvider, Box, Grid, theme, useToast } from '@chakra-ui/react';
import { TableComponent } from '../table/table.component';
import { Navbar } from '../navbar/navbar.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { UserPageComponent } from '../../routes/user-page/user-page.component';
import {
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
} from '../../utils/api';
import { useEffect, useState } from 'react';
import { sampleData } from '../../utils/data';
import { User } from '../../utils/genericTypes';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllUsers().then((response) => {
      setData(response)
    }).catch((err) => {
      toast({
        position: 'top',
        title: `Errore nel caricamento dei dati.`,
        description: err.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      console.log(err);
    }).finally(() => setIsLoading(false))
  }, []);

  const toast = useToast()

  const handleUpdateUser = (index: number, updatedUser: User) => {
    const updatedData = [...data];
    updatedData[index] = updatedUser;
    updateUser({ ...updatedUser, id: updatedUser.id })
      .then(() => {
        toast({
          position: 'top',
          title: 'Informazioni aggiornate.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setData(updatedData);
      })
      .catch((err) => {
        toast({
          position: 'top',
          title: `Si e' verificato un errore.`,
          description: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        console.log(err);
      });
  };

  const handleDeleteUser = (index: number, updatedUser: User) => {
    const updatedData = [...data];
    updatedData[index] = updatedUser;
    deleteUser({ id: updatedUser.id })
      .then(() => {
        setData(updatedData);
        toast({
          position: 'top',
          title: 'Risorsa eliminata.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        getAllUsers()
          .then((response) => {
            setData(response);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toast({
          position: 'top',
          title: `Si e' verificato un errore.`,
          description: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        console.log(err);
      });
  };

  const handleCreateUser = (createdUser: User) => {
    createUser({ ...createdUser })
      .then(() => {
        toast({
          position: 'top',
          title: 'Nuova risorsa creata.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        getAllUsers()
          .then((response) => {
            setData(response);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toast({
          position: 'top',
          title: `Si e' verificato un errore.`,
          description: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        console.log(err);
      });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="40vh" p={3}>
          <Navbar />
          <Routes>
            <Route path="/" element={isLoading ? <SpinnerComponent /> : <TableComponent
              users={data}
              onUpdateUser={handleUpdateUser}
              onDeleteUser={handleDeleteUser}
              onCreateUser={handleCreateUser}
            />} />
            <Route path="/detail-page/:id" element={<UserPageComponent onUpdateUser={handleUpdateUser} users={data} />} />
          </Routes>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
