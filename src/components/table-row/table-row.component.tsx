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
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleTableRowClick = (user: User) => {
    navigate(`/detail-page/${user.id}`, { state: { user } });
  };

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
    <Tr _hover={!editMode ? {
      background: "cyan",
      color: "black",
    } : {
      background: "transparent",
      color: "blue.500",
    }} cursor='pointer'>
      {editMode ? (
        <>
          <Td >
            <NumberInputComponent
              inputValue={updatedUser.userId}
              name="userId"
              handleChange={handleChange}
            />
          </Td>
          <Td >
            <TextInputComponent
              inputValue={updatedUser.firstName}
              name="firstName"
              handleChange={handleChange}
            />
          </Td>
          <Td >
            <TextInputComponent
              inputValue={updatedUser.lastName}
              name="lastName"
              handleChange={handleChange}
            />
          </Td>
          <Td >
            <DateInputComponent
              inputValue={updatedUser.birthDay}
              name="birthDay"
              handleChange={handleChange}
            />
          </Td>
          <Td >
            <SelectInputComponent
              inputValue={updatedUser.company}
              name="company"
              handleChange={handleChange}
            />
          </Td>
          <Td >
            <DateInputComponent
              inputValue={updatedUser.startDate}
              name="startDate"
              handleChange={handleChange}
            />
          </Td>
          <Td >
            <DateInputComponent
              inputValue={updatedUser.endDate}
              name="endDate"
              handleChange={handleChange}
            />
          </Td>
        </>
      ) : (
        <>
          <TableUnitComponent inputValue={updatedUser.userId} handleTableRowClick={() => handleTableRowClick(user)} />
          <TableUnitComponent inputValue={updatedUser.firstName} handleTableRowClick={() => handleTableRowClick(user)} />
          <TableUnitComponent inputValue={updatedUser.lastName} handleTableRowClick={() => handleTableRowClick(user)} />
          <TableUnitComponent inputValue={updatedUser.birthDay} handleTableRowClick={() => handleTableRowClick(user)} />
          <TableUnitComponent inputValue={updatedUser.company} handleTableRowClick={() => handleTableRowClick(user)} />
          <TableUnitComponent inputValue={updatedUser.startDate} handleTableRowClick={() => handleTableRowClick(user)} />
          <TableUnitComponent inputValue={updatedUser.endDate} handleTableRowClick={() => handleTableRowClick(user)} />
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
                _hover={{ color: "black" }}
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
