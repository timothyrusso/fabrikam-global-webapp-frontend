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
import { User } from '../../utils/generic-types';
import { selectDefaultValue } from '../../utils/constants';
import { useFabrikamApi } from '../../hooks/useFabrikamApi';
import './modal.style.css';

export const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createdUser, setCreatedUser] = useState<User>(selectDefaultValue);
  const [validInput, setValidInput] = useState(false);

  const { handleCreateUser } = useFabrikamApi()

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
    setValidInput(value.trim() !== '');
  };

  const handleCreate = () => {
    handleCreateUser(createdUser);
    onClose();
  };

  const handleCancel = () => {
    setValidInput(false)
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
          <ModalHeader>Aggiungi nuovo utente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              <NumberInputComponent
                handleChange={handleChange}
                name="userId"
                classStyle="modal"
                label='Inserisci lo userId (numero)'
              />
              <TextInputComponent
                name="firstName"
                handleChange={handleChange}
                classStyle="modal"
                label='Inserisci il nome'
              />
              <TextInputComponent
                name="lastName"
                handleChange={handleChange}
                classStyle="modal"
                label='Inserisci il cognome'
              />
              <DateInputComponent
                handleChange={handleChange}
                name="birthDay"
                classStyle="modal"
                label='Inserisci la data di nascita'
              />
              <SelectInputComponent
                handleChange={handleChange}
                name="company"
                classStyle="modal"
                label="Inserisci la compagnia"
              />
              <DateInputComponent
                handleChange={handleChange}
                name="startDate"
                classStyle="modal"
                label='Inserisci la data di inizio'
              />
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCreate} colorScheme="blue" mr={3} isDisabled={!validInput}>Salva
            </Button>
            <Button onClick={handleCancel}>Annulla</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
