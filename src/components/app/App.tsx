import * as React from 'react';
import { ChakraProvider, Box, Grid, theme, Flex, Center, Text, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../colorModeSwitcher/ColorModeSwitcher';
import { TableComponent } from '../table/table.component';
import { getAllUsers } from '../../utils/api';
import { useEffect, useState } from 'react';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  birthDay: string;
  company: string;
  startDate: string;
  endDate: string;
  addressOne: string;
  addressTwo: string;
  city: string;
  province: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export const App = () => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => { getAllUsers().then((response) => { setData(response); }).catch((err) => { console.log(err); }); }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Flex>
            <Center w='220px' h='30px' color='green.400'>
              <Text fontSize='3xl'>Fabrikam Global</Text>
            </Center>
            <Spacer />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <TableComponent users={data} />
        </Grid>
      </Box>
    </ChakraProvider>)
};
