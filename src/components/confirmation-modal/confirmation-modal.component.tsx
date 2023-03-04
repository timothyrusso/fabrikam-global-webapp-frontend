import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { FC } from 'react';

export type ConfirmationModalComponentProps = {
  handleDeleteConfirmation: () => void;
};

export const ConfirmationModalComponent: FC<
  ConfirmationModalComponentProps
> = ({ handleDeleteConfirmation }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Remove user"
        icon={<DeleteIcon />}
        onClick={onOpen}
        _hover={{ color: "black" }}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered aria-labelledby="delete-confirmation-modal">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader id="delete-confirmation-modal">Sicuro di voler cancellare?</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              w={50}
              onClick={handleDeleteConfirmation}
              type="submit"
            >
              Si
            </Button>
            <Button w={50} onClick={onClose}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
