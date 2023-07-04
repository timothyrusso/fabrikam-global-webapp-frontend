import { ChakraProvider, Box, Grid, theme, useToast } from '@chakra-ui/react';
import { TableComponent } from '../table/table.component';
import { Navbar } from '../navbar/navbar.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { UserPageComponent } from '../../routes/user-page/user-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { getAllUsers } from '../../api/api';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { toastFetchError } from '../../utils/toast.config';
import { useDispatch } from 'react-redux';
import { fetchUsersState } from '../../redux/store';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        dispatch(fetchUsersState(response));
      })
      .catch((err) => {
        toast(toastFetchError(err));
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="40vh" p={3}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={isLoading ? <SpinnerComponent /> : <TableComponent />}
            />
            <Route path="/detail-page/:id" element={<UserPageComponent />} />
            <Route path="*" element={<PageNotFoundComponent />} />
          </Routes>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
