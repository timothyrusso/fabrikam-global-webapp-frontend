import { Table, Thead, Tbody, Tr, Th, TableContainer, TableCaption } from '@chakra-ui/react';
import { TableRowComponent } from '../table-row/table-row.component';
import { User } from '../app/App';
import { FC } from 'react';

interface TableComponentProps extends React.HTMLAttributes<HTMLElement> {
  users: User[];
}

export const TableComponent: FC<TableComponentProps> = (data) => {

  return (
    <TableContainer marginTop={3} marginLeft={5} marginRight={5}>
      <Table variant="unstyled" border="2px" borderColor="gray.200">
      <TableCaption>Clicca sull'elemento della tabella per modificare il dato.</TableCaption>
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
          {data.users.map((user) => {
            return (
              <TableRowComponent
                key={user.userId.toString()}
                userId={user.userId}
                firstName={user.firstName}
                lastName={user.lastName}
                birthDay={user.birthDay}
                company={user.company}
                startDate={user.startDate}
                endDate={user.endDate}
              />
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
