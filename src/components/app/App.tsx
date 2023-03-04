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
import React, { useEffect, useState } from 'react';
import { sampleData } from '../../utils/data';
import { User } from '../../utils/generic-types';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { toastDeleteSuccess, toastCreateSuccess, toastUpdateSuccess, toastGenericError, toastFetchError } from '../../utils/toast.config';

export const App = () => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate()
  const goToHomePage = () => navigate('/')

  const toast = useToast()

  useEffect(() => {
    getAllUsers().then((response) => setData(response)).catch((err) => {
      toast(toastFetchError(err));
      console.log(err);
    }).finally(() => setIsLoading(false))
  }, []);

  const handleApiError = (err: Error) => {
    toast(toastGenericError(err));
    console.log(err);
  };

  const handleUpdateUser = (index: number, updatedUser: User) => {
    const updatedData = [...data];
    updatedData[index] = updatedUser;
    updateUser({ ...updatedUser, id: updatedUser.id })
      .then(() => {
        toast(toastUpdateSuccess);
        setData(updatedData);
      })
      .catch(handleApiError);
  };

  const handleDeleteUser = (index: number, updatedUser: User) => {
    const updatedData = [...data];
    updatedData[index] = updatedUser;
    deleteUser({ id: updatedUser.id })
      .then(() => {
        setData(updatedData.filter(user => user.id !== updatedUser.id));
        toast(toastDeleteSuccess)
        goToHomePage()
      })
      .catch(handleApiError);
  };

  const handleCreateUser = (createdUser: User) => {
    createUser({ ...createdUser })
      .then(() => {
        toast(toastCreateSuccess);
        return getAllUsers()
      }
      ).then((response) => setData(response))
      .catch(handleApiError);
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
            <Route path="/detail-page/:id" element={<UserPageComponent onUpdateUser={handleUpdateUser} onDeleteUser={handleDeleteUser} users={data} />} />
          </Routes>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
