import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalFooter } from "@chakra-ui/react"
import { useRef, FC, useState } from "react"
import { DateInputComponent } from "../date-input/date-input.component";
import { NumberInputComponent } from "../number-input/number-input.component";
import { SelectInputComponent } from "../select-input/select-input.component";
import { TextInputComponent } from "../text-input/text-input.component";
import './modal.style.css';

export type ModalComponentProps = {
    onCreate: any;
}

const initialObject = {
    "addressOne": "Indirizzo 1",
    "addressTwo": "Indirizzo 2",
    "city": "Citta'",
    "province": "Provincia"
}

export const ModalComponent: FC<ModalComponentProps> = ({ onCreate }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [createdUser, setCreatedUser] = useState(initialObject)

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        if (name === 'userId') {
            setCreatedUser((createdUser) => ({ ...createdUser, [name]: parseInt(value) }));
        } else {
            setCreatedUser((createdUser) => ({ ...createdUser, [name]: value }));
        }
    }

    const handleCreate = () => {
        onCreate(createdUser)
        onClose()
    }

    return (
        <>
            <Button onClick={onOpen} colorScheme='green' size='lg' variant='outline'>
                Aggiungi utente
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Aggiungi nuovo utente</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>userId</FormLabel>
                            <NumberInputComponent
                                handleChange={handleChange}
                                name='userId'
                                classStyle="modal"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <TextInputComponent name='firstName' handleChange={handleChange} classStyle="modal" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Cognome</FormLabel>
                            <TextInputComponent name='lastName' handleChange={handleChange} classStyle="modal" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Data di nascita</FormLabel>
                            <DateInputComponent
                                handleChange={handleChange}
                                name='birthDay'
                                classStyle="modal"
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Societa'</FormLabel>
                            <SelectInputComponent
                                handleChange={handleChange}
                                name='company'
                                classStyle="modal"
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Data di inizio</FormLabel>
                            <DateInputComponent
                                handleChange={handleChange}
                                name='startDate'
                                classStyle="modal"
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Data di fine</FormLabel>
                            <DateInputComponent
                                handleChange={handleChange}
                                name='endDate'
                                classStyle="modal"
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleCreate} colorScheme='blue' mr={3}>
                            Salva
                        </Button>
                        <Button onClick={onClose}>Annulla</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}