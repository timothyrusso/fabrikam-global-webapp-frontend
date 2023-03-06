import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { useState, ChangeEvent } from 'react';
import { DateInputComponent } from '../date-input/date-input.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { SelectInputComponent } from '../select-input/select-input.component';
import { TextInputComponent } from '../text-input/text-input.component';
import { User } from '../../types/generic-types';
import { selectDefaultValue } from '../../utils/constants';
import { useFabrikamApi } from '../../hooks/useFabrikamApi';
import { useForm } from 'react-hook-form';
import './modal.style.css';

export const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createdUser, setCreatedUser] = useState<User>(selectDefaultValue);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = () => handleCreate()

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    if (name === 'userId') {
      setCreatedUser((createdUser) => ({
        ...createdUser,
        [name]: parseInt(value),
      }));
    } else {
      setCreatedUser((createdUser) => ({ ...createdUser, [name]: value }));
    }
  };

  const { handleCreateUser } = useFabrikamApi()

  const handleCreate = () => {
    handleCreateUser(createdUser);
    onClose();
  };

  const handleCancel = () => {
    reset({})
    onClose()
  }
 
  return (
    <>
      <Button onClick={onOpen} colorScheme="green" size="lg" variant="outline">
        Aggiungi utente
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Aggiungi nuovo utente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              <NumberInputComponent
                name="userId"
                classStyle="modal"
                label='Inserisci lo userId (numero)'
                handleChange={handleChange}
                register={register}
                errors={errors}
              />
              <TextInputComponent
                name="firstName"
                handleChange={handleChange}
                classStyle="modal"
                label='Inserisci il nome'
                register={register}
                errors={errors}
              />
              <TextInputComponent
                name="lastName"
                handleChange={handleChange}
                classStyle="modal"
                label='Inserisci il cognome'
                register={register}
                errors={errors}
              />
              <DateInputComponent
                handleChange={handleChange}
                name="birthDay"
                classStyle="modal"
                label='Inserisci la data di nascita'
                register={register}
                errors={errors}
              />
              <SelectInputComponent
                handleChange={handleChange}
                name="company"
                classStyle="modal"
                label="Inserisci la compagnia"
                register={register}
                errors={errors}
              />
              <DateInputComponent
                handleChange={handleChange}
                name="startDate"
                classStyle="modal"
                label='Inserisci la data di inizio'
                register={register}
                errors={errors}
              />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} type='submit' isDisabled={Object.keys(errors).length > 0}>Salva
            </Button>
            <Button onClick={handleCancel}>Annulla</Button>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
