import { Box, Center, Avatar, Stack, Text, Button } from '@chakra-ui/react';
import { NumberInputComponent } from '../../components/number-input/number-input.component';
import { TextInputComponent } from '../../components/text-input/text-input.component';
import { SelectInputComponent } from '../../components/select-input/select-input.component';
import { DateInputComponent } from '../../components/date-input/date-input.component';
import { useState, ChangeEvent, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatDateString } from '../../utils/helpers';
import { User } from '../../types/generic-types';
import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useFabrikamApi } from '../../hooks/useFabrikamApi';
import { useForm } from 'react-hook-form';

export const UserPageComponent = () => {
  const location = useLocation();
  const { handleUpdateUser, handleDeleteUser } = useFabrikamApi();
  const user = location.state?.user;

  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState<User>(user);

  const users = useSelector((state: RootState) => state.users);
  const navigate = useNavigate();
  const goToHomePage = () => navigate('/');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = () => handleSave();

  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUpdatedUser((updatedUser) => ({ ...updatedUser, [name]: value }));
  };

  const handleSave = () => {
    const index = users.findIndex((object) => object.id === updatedUser.id);
    if (index !== -1) {
      handleUpdateUser(updatedUser);
      setEditMode(false);
    }
  };

  const handleCancel = () => {
    reset({});
    setUpdatedUser(user);
    setEditMode(false);
  };

  const handleDeleteConfirmation = () => {
    const index = users.findIndex((object) => object.id === updatedUser.id);
    if (index !== -1) {
      const updatedData = [...users];
      updatedData[index] = updatedUser;
      handleDeleteUser(updatedUser);
      goToHomePage();
    }
  };

  return (
    <Center marginTop={20}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          maxWidth="700px"
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
          minWidth={{ md: '700px', base: '350px' }}
          textAlign={{ md: 'start', base: 'center' }}
        >
          <Avatar
            marginTop={10}
            marginLeft={{ md: 5, base: 0 }}
            name={`${updatedUser.firstName} ${updatedUser.lastName}`}
          />
          <Stack spacing={3} p={5}>
            {editMode ? (
              <>
                <NumberInputComponent
                  inputValue={updatedUser.userId}
                  name="userId"
                  handleChange={handleChange}
                  classStyle="modal"
                  label="Inserisci lo userId (numero)"
                  register={register}
                  errors={errors}
                />
                <TextInputComponent
                  inputValue={updatedUser.firstName}
                  name="firstName"
                  handleChange={handleChange}
                  classStyle="modal"
                  label="Inserisci il nome"
                  register={register}
                  errors={errors}
                />
                <TextInputComponent
                  inputValue={updatedUser.lastName}
                  name="lastName"
                  handleChange={handleChange}
                  classStyle="modal"
                  label="Inserisci il cognome"
                  register={register}
                  errors={errors}
                />
                <DateInputComponent
                  inputValue={updatedUser.birthDay}
                  name="birthDay"
                  handleChange={handleChange}
                  classStyle="modal"
                  label="Inserisci la data di nascita"
                  register={register}
                  errors={errors}
                />
                <SelectInputComponent
                  inputValue={updatedUser.company}
                  name="company"
                  handleChange={handleChange}
                  classStyle="modal"
                  label="Inserisci la compagnia"
                  register={register}
                  errors={errors}
                />
                <DateInputComponent
                  inputValue={updatedUser.startDate}
                  name="startDate"
                  handleChange={handleChange}
                  classStyle="modal"
                  label="Inserisci la data di inizio"
                  register={register}
                  errors={errors}
                />
                <DateInputComponent
                  inputValue={
                    updatedUser.endDate !== null ? updatedUser.endDate : ''
                  }
                  name="endDate"
                  handleChange={handleChange}
                  classStyle="modal"
                  label="Inserisci la data di fine"
                  register={register}
                  errors={errors}
                />
                <TextInputComponent
                  inputValue={
                    updatedUser.addressOne !== null
                      ? updatedUser.addressOne
                      : ''
                  }
                  name="addressOne"
                  handleChange={handleChange}
                  classStyle="modal"
                  label="Inserisci il primo indirizzo"
                  register={register}
                  errors={errors}
                />
                <TextInputComponent
                  inputValue={
                    updatedUser.addressTwo !== null
                      ? updatedUser.addressTwo
                      : ''
                  }
                  name="addressTwo"
                  handleChange={handleChange}
                  classStyle="modal"
                  label="Inserisci il secondo indirizzo"
                  register={register}
                  errors={errors}
                />
                <TextInputComponent
                  inputValue={updatedUser.city !== null ? updatedUser.city : ''}
                  name="city"
                  handleChange={handleChange}
                  classStyle="modal"
                  label="Inserisci il comune"
                  register={register}
                  errors={errors}
                />
                <TextInputComponent
                  inputValue={
                    updatedUser.province !== null ? updatedUser.province : ''
                  }
                  name="province"
                  handleChange={handleChange}
                  classStyle="modal"
                  label="Inserisci la provincia"
                  register={register}
                  errors={errors}
                />
              </>
            ) : (
              <>
                <Text fontSize="4xl">
                  {updatedUser.firstName} {updatedUser.lastName}
                </Text>
                <Text fontSize="2xl" color="gray.500">
                  userId:{' '}
                </Text>
                {updatedUser.userId}
                <Text fontSize="2xl" color="gray.500">
                  Data di nascita:{' '}
                </Text>
                {updatedUser.birthDay}
                <Text fontSize="2xl" color="gray.500">
                  Societa':{' '}
                </Text>
                {updatedUser.company}
                <Text fontSize="2xl" color="gray.500">
                  Data di inizio:{' '}
                </Text>
                {updatedUser.startDate}
                <Text fontSize="2xl" color="gray.500">
                  Data di fine:{' '}
                </Text>
                {updatedUser.endDate}
                <Text fontSize="2xl" color="gray.500">
                  Primo indirizzo:{' '}
                </Text>
                {updatedUser.addressOne}
                <Text fontSize="2xl" color="gray.500">
                  Secondo indirizzo:{' '}
                </Text>
                {updatedUser.addressTwo}
                <Text fontSize="2xl" color="gray.500">
                  Citta':{' '}
                </Text>
                {updatedUser.city}
                <Text fontSize="2xl" color="gray.500">
                  Provincia:{' '}
                </Text>
                {updatedUser.province}
                <Text fontSize="2xl" color="gray.500">
                  Data di creazione:{' '}
                </Text>
                {formatDateString(updatedUser.createdAt)}
              </>
            )}
          </Stack>
          <Stack
            direction="row"
            marginBottom={5}
            spacing={4}
            justifyContent={{ md: 'end', base: 'center' }}
            marginRight={{ md: 5, base: 0 }}
          >
            {editMode ? (
              <>
                <Button
                  colorScheme="green"
                  isDisabled={Object.keys(errors).length > 0}
                  type="submit"
                >
                  Salva
                </Button>
                <ConfirmationModalComponent
                  handleDeleteConfirmation={handleDeleteConfirmation}
                />
                <Button onClick={handleCancel}>Annulla</Button>
              </>
            ) : (
              <>
                <Button onClick={() => navigate('/')}>Torna indietro</Button>
                <Button
                  colorScheme="blue"
                  onClick={() => setEditMode(true)}
                  type="button"
                >
                  Modifica
                </Button>
              </>
            )}
          </Stack>
        </Box>
      </form>
    </Center>
  );
};
