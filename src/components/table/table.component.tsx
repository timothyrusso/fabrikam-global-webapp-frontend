import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { TableRowComponent } from '../table-row/table-row.component';
import { ModalComponent } from '../modal/modal.component';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const TableComponent = () => {
  const users = useSelector((state: RootState) => state.users);

  return (
    <TableContainer marginTop={120} marginLeft={5} marginRight={5}>
      <Stack direction="row" align="center" marginBottom={5}>
        <ModalComponent />
      </Stack>
      {users.length > 0 ? (
        <Table variant="unstyled" border="2px" borderColor="gray.200">
          <Thead>
            <Tr>
              <Th>Id dipendente</Th>
              <Th>Nome</Th>
              <Th>Cognome</Th>
              <Th>Data di nascita</Th>
              <Th>Società</Th>
              <Th>Data inizio</Th>
              <Th>Data fine</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <TableRowComponent key={user.id.toString()} user={user} />
            ))}
          </Tbody>
        </Table>
      ) : (
        <Text fontSize="4xl">Nessun dato disponibile</Text>
      )}
    </TableContainer>
  );
};
