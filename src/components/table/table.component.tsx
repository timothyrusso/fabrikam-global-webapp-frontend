import { Table, Thead, Tbody, Tr, Th, TableContainer, Stack } from '@chakra-ui/react';
import { TableRowComponent } from '../table-row/table-row.component';
import { ModalComponent } from '../modal/modal.component';
import { User } from '../app/App';
import { FC } from 'react';

interface TableComponentProps extends React.HTMLAttributes<HTMLElement> {
  users: User[];
  onUpdateUser: (index: number, updatedUser: User) => void;
  onDeleteUser: (index: number, updatedUser: User) => void;
  onCreateUser: (createdUser: User) => void;
}

export const TableComponent: FC<TableComponentProps> = ({ users, onUpdateUser, onDeleteUser, onCreateUser }) => {

  const handleChange = (index: number, updatedUser: User) => {
    const updatedData = [...users];
    updatedData[index] = updatedUser;
    onUpdateUser(index, updatedUser);
  };

  const handleDelete = (index: number, updatedUser: User) => {
    const updatedData = [...users];
    updatedData[index] = updatedUser;
    onDeleteUser(index, updatedUser);
  };

  const handleCreate = (createdUser: User) => {
    onCreateUser(createdUser);
  };

  return (

    <TableContainer marginTop={3} marginLeft={5} marginRight={5}>
      <Stack direction='row' align='center' marginBottom={5}>
        <ModalComponent onCreate={(createdUser: User) => handleCreate(createdUser)} />
      </Stack>
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
          {users.map((user, index) => {
            return (
              <TableRowComponent
                key={user.id.toString()}
                onSave={(updatedUser: User) => handleChange(index, updatedUser)}
                onDelete={(updatedUser: User) => handleDelete(index, updatedUser)}
                user={user}
              />
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
