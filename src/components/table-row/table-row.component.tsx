import { Tr, Td, IconButton, ButtonGroup, Tooltip } from '@chakra-ui/react';
import { EditIcon, CloseIcon, CheckIcon } from '@chakra-ui/icons';
import { FC, useState, ChangeEvent } from 'react';
import { User } from '../../types/generic-types';
import { DateInputComponent } from '../date-input/date-input.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { TextInputComponent } from '../text-input/text-input.component';
import { SelectInputComponent } from '../select-input/select-input.component';
import { TableUnitComponent } from '../table-unit/table-unit.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { useNavigate } from 'react-router-dom';
import { useFabrikamApi } from '../../hooks/useFabrikamApi';
import { useForm } from 'react-hook-form';
import './table-row.style.css';

export type TableRowComponentProps = {
  user: User;
};

export const TableRowComponent: FC<TableRowComponentProps> = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [validInput, setValidInput] = useState(true);

  const { handleUpdateUser, handleDeleteUser } = useFabrikamApi();

  const navigate = useNavigate();

  const handleTableRowClick = (user: User) => {
    navigate(`/detail-page/${user.id}`, { state: { user } });
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const nameRegex = /\d/;
  const firstNameIsValid =
    !nameRegex.test(updatedUser.firstName) && updatedUser.firstName !== '';
  const lastNameIsValid =
    !nameRegex.test(updatedUser.lastName) && updatedUser.lastName !== '';

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUpdatedUser((updatedUser) => ({ ...updatedUser, [name]: value }));
    setValidInput(value.trim() !== '');
  };

  const handleSave = () => {
    if (
      Array.from(String(updatedUser.userId), Number).length === 5 &&
      firstNameIsValid &&
      lastNameIsValid &&
      updatedUser.startDate !== ''
    ) {
      handleUpdateUser(updatedUser);
      setEditMode(false);
    } else {
      setValidInput(false);
    }
  };

  const handleDelete = () => {
    handleDeleteUser(updatedUser);
    setEditMode(false);
  };

  const handleCancel = () => {
    setUpdatedUser(user);
    setEditMode(false);
    setValidInput(true);
  };

  const handleDeleteConfirmation = () => {
    handleDelete();
  };

  return (
    <Tr
      _hover={
        !editMode
          ? {
              background: 'cyan',
              color: 'black',
            }
          : {
              background: 'transparent',
              color: 'blue.500',
            }
      }
      cursor="pointer"
    >
      {editMode ? (
        <>
          <Td>
            <NumberInputComponent
              inputValue={updatedUser.userId}
              name="userId"
              handleChange={handleChange}
              isTableRow={true}
              register={register}
              errors={errors}
            />
          </Td>
          <Td>
            <TextInputComponent
              inputValue={updatedUser.firstName}
              name="firstName"
              handleChange={handleChange}
              isTableRow={true}
              register={register}
              errors={errors}
            />
          </Td>
          <Td>
            <TextInputComponent
              inputValue={updatedUser.lastName}
              name="lastName"
              handleChange={handleChange}
              isTableRow={true}
              register={register}
              errors={errors}
            />
          </Td>
          <Td>
            <DateInputComponent
              inputValue={updatedUser.birthDay}
              name="birthDay"
              handleChange={handleChange}
              isTableRow={true}
              register={register}
              errors={errors}
            />
          </Td>
          <Td>
            <SelectInputComponent
              inputValue={updatedUser.company}
              name="company"
              handleChange={handleChange}
              isTableRow={true}
              register={register}
              errors={errors}
            />
          </Td>
          <Td>
            <DateInputComponent
              inputValue={updatedUser.startDate}
              name="startDate"
              handleChange={handleChange}
              isTableRow={true}
              register={register}
              errors={errors}
            />
          </Td>
          <Td>
            <DateInputComponent
              inputValue={
                updatedUser.endDate !== null ? updatedUser.endDate : ''
              }
              name="endDate"
              handleChange={handleChange}
              isTableRow={true}
              register={register}
              errors={errors}
            />
          </Td>
        </>
      ) : (
        <>
          <TableUnitComponent
            inputValue={updatedUser.userId}
            handleTableRowClick={() => handleTableRowClick(user)}
          />
          <TableUnitComponent
            inputValue={updatedUser.firstName}
            handleTableRowClick={() => handleTableRowClick(user)}
          />
          <TableUnitComponent
            inputValue={updatedUser.lastName}
            handleTableRowClick={() => handleTableRowClick(user)}
          />
          <TableUnitComponent
            inputValue={updatedUser.birthDay}
            handleTableRowClick={() => handleTableRowClick(user)}
          />
          <TableUnitComponent
            inputValue={updatedUser.company}
            handleTableRowClick={() => handleTableRowClick(user)}
          />
          <TableUnitComponent
            inputValue={updatedUser.startDate}
            handleTableRowClick={() => handleTableRowClick(user)}
          />
          <TableUnitComponent
            inputValue={updatedUser.endDate}
            handleTableRowClick={() => handleTableRowClick(user)}
          />
        </>
      )}
      <Td>
        <ButtonGroup size="sm" isAttached variant="outline">
          {editMode && (
            <>
              {!validInput ? (
                <Tooltip label="Verifica che i campi siano compilati correttamente">
                  <IconButton
                    aria-label="Save user"
                    icon={<CheckIcon />}
                    onClick={handleSave}
                    isDisabled={!validInput}
                  />
                </Tooltip>
              ) : (
                <IconButton
                  aria-label="Save user"
                  icon={<CheckIcon />}
                  onClick={handleSave}
                  isDisabled={!validInput}
                />
              )}

              <IconButton
                aria-label="Close edit mode"
                icon={<CloseIcon />}
                onClick={handleCancel}
              />
            </>
          )}
          {!editMode && (
            <>
              <IconButton
                aria-label="Update user"
                icon={<EditIcon />}
                onClick={() => setEditMode(true)}
                _hover={{ color: 'black' }}
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
