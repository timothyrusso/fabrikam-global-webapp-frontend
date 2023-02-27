import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import { TableRowComponent } from '../table-row/table-row.component';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../utils/api';
import { TableRowComponentProps } from '../table-row/table-row.component';

export const TableComponent = () => {
  const [data, setData] = useState<TableRowComponentProps[]>([]);

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TableContainer marginTop={3}>
      <Table variant="simple" border="2px" borderColor="gray.200">
        <Thead>
          <Tr>
            <Th>Id dipendente</Th>
            <Th>Nome</Th>
            <Th>Cognome</Th>
            <Th>Data di nascita</Th>
            <Th>Società</Th>
            <Th>Data inizio</Th>
            <Th>Data fine</Th>
            <Th>Azioni</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((data) => {
            return (
              <TableRowComponent
                userId={data.userId}
                firstName={data.firstName}
                lastName={data.lastName}
                birthDay={data.birthDay}
                company={data.company}
                startDate={data.startDate}
                endDate={data.endDate}
              />
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
