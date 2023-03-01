import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react"
import { useRef, FC, useState } from "react"

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
        if(name === 'userId'){
            setCreatedUser((createdUser) => ({ ...createdUser, [name]: parseInt(value) }));
        } else {
            setCreatedUser((createdUser) => ({ ...createdUser, [name]: value }));
        }
    }

    const handleCreate = () => {
        onCreate(createdUser)
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
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <Input name='firstName' onChange={handleChange} ref={initialRef} placeholder='Nome' />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Cognome</FormLabel>
                            <Input name='lastName' onChange={handleChange} placeholder='Cognome' />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Data di nascita</FormLabel>
                            <input
                                onChange={handleChange}
                                type='date'
                                min="1900-01-01" max="2100-12-31"
                                name='birthDay'
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Societa'</FormLabel>
                            <select placeholder='Seleziona azienda'
                                onChange={handleChange}
                                name='company'
                            >
                                <option>Fabrikam</option>
                                <option>FabrikStore</option>
                                <option>FabrikDistribution</option>
                            </select>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Data di inizio</FormLabel>
                            <input
                                onChange={handleChange}
                                type='date'
                                min="1900-01-01" max="2100-12-31"
                                name='startDate'
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Data di fine</FormLabel>
                            <input
                                onChange={handleChange}
                                type='date'
                                min="1900-01-01" max="2100-12-31"
                                name='endDate'
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleCreate} colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}