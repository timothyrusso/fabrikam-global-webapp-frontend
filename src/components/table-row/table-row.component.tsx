import {
  Tr,
  Td,
  IconButton,
  ButtonGroup,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CloseIcon, CheckIcon } from '@chakra-ui/icons';
import { FC, useState } from 'react';
import { User } from '../app/App';
import { updateUser } from '../../utils/api';

export type TableRowComponentProps = {
  onSave: any;
  user: User
};

export const TableRowComponent: FC<TableRowComponentProps> = ({ user, onSave }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUpdatedUser((updatedUser) => ({ ...updatedUser, [name]: value }));
    console.log(updatedUser);
  }

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleSave = () => {
    console.log(updatedUser)
    onSave(updatedUser);
    setEditMode(false);
  };

  const parseDate = (date: string) => new Date(Date.parse(date))
  const parseDateString = (date: any) => date.toISOString().slice(0, 10);
  

  return (
    <Tr>
      {editMode ? <Td>
        <input
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={handleChange}
          name='userId'
          maxLength={5}
          minLength={5}
          placeholder='userId'
          value={updatedUser.userId}
          style={{maxWidth: '130px'}}
        />
      </Td> : <Td>
        {user.userId}
      </Td>}
      {editMode ? <Td><input
        value={updatedUser.firstName}
        onChange={handleChange}
        placeholder='firstName'
        name='firstName'
        style={{maxWidth: '130px', border: '2px solid blue', borderRadius: '5px', backgroundColor: 'transparent', padding: '4px'}}
      /></Td> : <Td>
        {user.firstName}
      </Td>}
      {editMode ? <Td><input
        value={updatedUser.lastName}
        onChange={handleChange}
        placeholder='lastName'
        name='lastName'
        style={{maxWidth: '130px'}}
      /></Td> : <Td>
        {user.lastName}
      </Td>}
      {editMode ? <Td><input
        value={updatedUser.birthDay}
        onChange={handleChange}
        type='date'
        min="1900-01-01" max="2100-12-31"
        name='birthDay'
      /></Td> : <Td>
        {user.birthDay}
      </Td>}
      {editMode ? <Td>
        <select placeholder='Seleziona azienda'
          value={updatedUser.company}
          onChange={handleChange}
          name='company'
        >
          <option>Fabrikam</option>
          <option>FabrikStore</option>
          <option>FabrikDistribution</option>
        </select>
      </Td> : <Td>
        {user.company}
      </Td>}
      {editMode ? <Td><input
        value={updatedUser.startDate}
        onChange={handleChange}
        type='date'
        min="1900-01-01" max="2100-12-31"
        name='startDate'
      /></Td> : <Td>
        {user.startDate}
      </Td>}
      {editMode ? <Td><input
        value={updatedUser.endDate}
        onChange={handleChange}
        type='date'
        min="1900-01-01" max="2100-12-31"
        name='endDate'
      /></Td> : <Td>
        {user.endDate}
      </Td>}
      <Td>
        <ButtonGroup size='sm' isAttached variant='outline'>
          {editMode && <IconButton aria-label="Save user" icon={<CheckIcon />} onClick={handleSave} />}
          {!editMode && <IconButton aria-label="Update user" icon={<EditIcon />} onClick={handleEdit} />}
          {editMode && <IconButton aria-label="Close edit mode" icon={<CloseIcon />} onClick={handleCancel} />}
          {!editMode && <IconButton aria-label="Remove user" icon={<DeleteIcon />} />}
        </ButtonGroup>
      </Td>
    </Tr>
  );
};
