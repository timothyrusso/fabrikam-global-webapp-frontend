import { Tr, Td, IconButton, ButtonGroup } from '@chakra-ui/react';
import { EditIcon, CloseIcon, CheckIcon } from '@chakra-ui/icons';
import { FC, useState, ChangeEvent } from 'react';
import { User } from '../../utils/genericTypes';
import { DateInputComponent } from '../date-input/date-input.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { TextInputComponent } from '../text-input/text-input.component';
import { SelectInputComponent } from '../select-input/select-input.component';
import { TableUnitComponent } from '../table-unit/table-unit.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import './table-row.style.css';

export type TableRowComponentProps = {
  onSave: (updatedUser: User) => void;
  onDelete: (updatedUser: User) => void;
  user: User;
};

export const TableRowComponent: FC<TableRowComponentProps> = ({
  user,
  onSave,
  onDelete,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUpdatedUser((updatedUser) => ({ ...updatedUser, [name]: value }));
  };

  const handleSave = () => {
    onSave(updatedUser);
    setEditMode(false);
  };

  const handleDelete = () => {
    onDelete(updatedUser);
    setEditMode(false);
  };

  const handleDeleteConfirmation = () => {
    handleDelete();
  };

  return (
    <Tr>
      {editMode ? (
        <>
          <Td w={342}>
            <NumberInputComponent
              inputValue={updatedUser.userId}
              name="userId"
              handleChange={handleChange}
            />
          </Td>
          <Td w={220}>
            <TextInputComponent
              inputValue={updatedUser.firstName}
              name="firstName"
              handleChange={handleChange}
            />
          </Td>
          <Td w={220}>
            <TextInputComponent
              inputValue={updatedUser.lastName}
              name="lastName"
              handleChange={handleChange}
            />
          </Td>
          <Td w={369}>
            <DateInputComponent
              inputValue={updatedUser.birthDay}
              name="birthDay"
              handleChange={handleChange}
            />
          </Td>
          <Td w={335}>
            <SelectInputComponent
              inputValue={updatedUser.company}
              name="company"
              handleChange={handleChange}
            />
          </Td>
          <Td w={366}>
            <DateInputComponent
              inputValue={updatedUser.startDate}
              name="startDate"
              handleChange={handleChange}
            />
          </Td>
          <Td w={369}>
            <DateInputComponent
              inputValue={updatedUser.endDate}
              name="endDate"
              handleChange={handleChange}
            />
          </Td>
        </>
      ) : (
        <>
          <TableUnitComponent inputValue={user.userId} />
          <TableUnitComponent inputValue={user.firstName} />
          <TableUnitComponent inputValue={user.lastName} />
          <TableUnitComponent inputValue={user.birthDay} />
          <TableUnitComponent inputValue={user.company} />
          <TableUnitComponent inputValue={user.startDate} />
          <TableUnitComponent inputValue={user.endDate} />
        </>
      )}
      <Td>
        <ButtonGroup size="sm" isAttached variant="outline">
          {editMode && (
            <>
            <IconButton
              aria-label="Save user"
              icon={<CheckIcon />}
              onClick={handleSave}
            />
            <IconButton
              aria-label="Close edit mode"
              icon={<CloseIcon />}
              onClick={() => setEditMode(false)}
            />
            </>
          )}
          {!editMode && (
            <>
            <IconButton
              aria-label="Update user"
              icon={<EditIcon />}
              onClick={() => setEditMode(true)}
            />
            <ConfirmationModalComponent
              handleDeleteConfirmation={handleDeleteConfirmation}
            />
            </>
          )}
        </ButtonGroup>
      </Td>
    </Tr>
  );
};
