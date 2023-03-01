import {
  Tr,
  Td,
  IconButton,
  ButtonGroup,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CloseIcon, CheckIcon } from '@chakra-ui/icons';
import { FC, useState } from 'react';
import { User } from '../app/App';
import { DateInputComponent } from '../date-input/date-input.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { TextInputComponent } from '../text-input/text-input.component';
import { SelectInputComponent } from '../select-input/select-input.component';
import { TableUnitComponent } from '../table-unit/table-unit.component';
import './table-row.component.css';
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

  return (
    <Tr>
      {editMode ?
        <>
          <NumberInputComponent inputValue={updatedUser.userId} name='userId' handleChange={handleChange} />
          <TextInputComponent inputValue={updatedUser.firstName} name='firstName' handleChange={handleChange} />
          <TextInputComponent inputValue={updatedUser.lastName} name='lastName' handleChange={handleChange} />
          <DateInputComponent inputValue={updatedUser.birthDay} name='birthDay' handleChange={handleChange} />
          <SelectInputComponent inputValue={updatedUser.company} name='company' handleChange={handleChange} />
          <DateInputComponent inputValue={updatedUser.startDate} name='startDate' handleChange={handleChange} />
          <DateInputComponent inputValue={updatedUser.endDate} name='endDate' handleChange={handleChange} />
        </>
        :
        <>
          <TableUnitComponent inputValue={user.userId} />
          <TableUnitComponent inputValue={user.firstName} />
          <TableUnitComponent inputValue={user.lastName} />
          <TableUnitComponent inputValue={user.birthDay} />
          <TableUnitComponent inputValue={user.company} />
          <TableUnitComponent inputValue={user.startDate} />
          <TableUnitComponent inputValue={user.endDate} />
        </>}
      <Td>
        <ButtonGroup size='sm' isAttached variant='outline'>
          {editMode && <IconButton aria-label="Save user" icon={<CheckIcon />} onClick={handleSave} />}
          {editMode && <IconButton aria-label="Close edit mode" icon={<CloseIcon />} onClick={handleCancel} />}
          {!editMode && <IconButton aria-label="Update user" icon={<EditIcon />} onClick={handleEdit} />}
          {!editMode && <IconButton aria-label="Remove user" icon={<DeleteIcon />} />}
        </ButtonGroup>
      </Td>
    </Tr>
  );
};
