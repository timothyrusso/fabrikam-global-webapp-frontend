import * as React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { TableComponent } from '../table/table.component';
import { Navbar } from '../navbar/navbar.component';
import { getAllUsers, updateUser, deleteUser, createUser } from '../../utils/api';
import { useEffect, useState } from 'react';
import { sampleData } from '../../utils/data'
import { User } from '../../utils/genericTypes';

export const App = () => {
  const [data, setData] = useState<User[]>(sampleData);
  // useEffect(() => { getAllUsers().then((response) => { setData(response); }).catch((err) => { console.log(err); }); }, []);

  const handleUpdateUser = (index: number, updatedUser: User) => {
    const updatedData = [...data];
    updatedData[index] = updatedUser;
    updateUser({ ...updatedUser, id: updatedUser.id }).then(() => {
      setData(updatedData);
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleDeleteUser = (index: number, updatedUser: User) => {
    const updatedData = [...data];
    updatedData[index] = updatedUser;
    deleteUser({ id: updatedUser.id }).then(() => {
      setData(updatedData);
      getAllUsers().then((response) => { setData(response); }).catch((err) => { console.log(err); });
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleCreateUser = (createdUser: User) => {
    createUser({ ...createdUser }).then(() => {
      getAllUsers().then((response) => { setData(response); }).catch((err) => { console.log(err); });
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Navbar />
          <TableComponent users={data} onUpdateUser={handleUpdateUser} onDeleteUser={handleDeleteUser} onCreateUser={handleCreateUser} />
        </Grid>
      </Box>
    </ChakraProvider>)
};
