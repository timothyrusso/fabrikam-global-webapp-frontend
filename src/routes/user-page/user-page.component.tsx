import { Box, Center, Avatar, FormLabel, Stack, Text, Button } from "@chakra-ui/react"
import { NumberInputComponent } from "../../components/number-input/number-input.component"
import { TextInputComponent } from "../../components/text-input/text-input.component"
import { SelectInputComponent } from "../../components/select-input/select-input.component"
import { DateInputComponent } from "../../components/date-input/date-input.component"
import { useState, ChangeEvent, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatDateString } from "../../utils/helpers"
import { User } from "../../utils/generic-types"
import { ConfirmationModalComponent } from "../../components/confirmation-modal/confirmation-modal.component"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useFabrikamApi } from "../../hooks/useFabrikamApi"

export const UserPageComponent = () => {
    const location = useLocation();
    const { handleUpdateUser, handleDeleteUser } = useFabrikamApi()
    const user = location.state?.user;

    const [editMode, setEditMode] = useState(false);
    const [updatedUser, setUpdatedUser] = useState<User>(user);
    const [validInput, setValidInput] = useState(true);

    const users = useSelector((state: RootState) => state.users);
    const navigate = useNavigate()
    const goToHomePage = () => navigate('/')

    useEffect(() => {
        setUpdatedUser(user);
    }, [user]);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setUpdatedUser((updatedUser) => ({ ...updatedUser, [name]: value }));
        setValidInput(value.trim() !== '');
    };

    const handleSave = () => {
        const index = users.findIndex(object => object.id === updatedUser.id);
        if (index !== -1) {
            handleUpdateUser(updatedUser);
            setEditMode(false);
        }
    };

    const handleCancel = () => {
        setUpdatedUser(user)
        setEditMode(false)
        setValidInput(true)
    }

    const handleDeleteConfirmation = () => {
        const index = users.findIndex(object => object.id === updatedUser.id);
        if (index !== -1) {
            const updatedData = [...users];
            updatedData[index] = updatedUser;
            handleDeleteUser(updatedUser)
            goToHomePage()
        }
    };

    return (
        <Center marginTop={20}>
            <Box maxWidth='700px' minWidth='350' borderWidth='2px' borderRadius='lg' overflow='hidden'>
                <Avatar marginTop={10} name={`${updatedUser.firstName} ${updatedUser.lastName}`} />
                <Stack spacing={3} justifyContent='center' p={5}>
                    {editMode ? (
                        <>
                            <NumberInputComponent
                                inputValue={updatedUser.userId}
                                name="userId"
                                handleChange={handleChange}
                                classStyle='modal'
                                label='Inserisci lo userId (numero)'
                            />
                            <TextInputComponent
                                inputValue={updatedUser.firstName}
                                name="firstName"
                                handleChange={handleChange}
                                classStyle='modal'
                                label='Inserisci il nome'
                            />
                            <TextInputComponent
                                inputValue={updatedUser.lastName}
                                name="lastName"
                                handleChange={handleChange}
                                classStyle='modal'
                                label='Inserisci il cognome'
                            />
                            <DateInputComponent
                                inputValue={updatedUser.birthDay}
                                name="birthDay"
                                handleChange={handleChange}
                                classStyle='modal'
                                label='Inserisci la data di nascita'
                            />
                            <SelectInputComponent
                                inputValue={updatedUser.company}
                                name="company"
                                handleChange={handleChange}
                                classStyle='modal'
                                label="Inserisci la compagnia"
                            />
                            <DateInputComponent
                                inputValue={updatedUser.startDate}
                                name="startDate"
                                handleChange={handleChange}
                                classStyle='modal'
                                label='Inserisci la data di inizio'
                            />
                            <DateInputComponent
                                inputValue={updatedUser.endDate}
                                name="endDate"
                                handleChange={handleChange}
                                classStyle='modal'
                                label='Inserisci la data di fine'
                            />
                            <TextInputComponent
                                inputValue={updatedUser.addressOne}
                                name="addressOne"
                                handleChange={handleChange}
                                classStyle='modal'
                                label='Inserisci il primo indirizzo'
                            />
                            <TextInputComponent
                                inputValue={updatedUser.addressTwo}
                                name="addressTwo"
                                handleChange={handleChange}
                                classStyle='modal'
                                label='Inserisci il secondo indirizzo'
                            />
                            <TextInputComponent
                                inputValue={updatedUser.city}
                                name="city"
                                handleChange={handleChange}
                                classStyle='modal'
                                label='Inserisci il comune'
                            />
                            <TextInputComponent
                                inputValue={updatedUser.province}
                                name="province"
                                handleChange={handleChange}
                                classStyle='modal'
                                label='Inserisci la provincia'
                            />
                        </>
                    ) : (
                        <>
                            <Text fontSize='4xl'>{updatedUser.firstName} {updatedUser.lastName}</Text>
                            <Text fontSize='2xl' color='gray.500'>userId: </Text>{updatedUser.userId}
                            <Text fontSize='2xl' color='gray.500'>Data di nascita: </Text>{updatedUser.birthDay}
                            <Text fontSize='2xl' color='gray.500'>Societa': </Text>{updatedUser.company}
                            <Text fontSize='2xl' color='gray.500'>Data di inizio: </Text>{updatedUser.startDate}
                            <Text fontSize='2xl' color='gray.500'>Data di fine: </Text>{updatedUser.endDate}
                            <Text fontSize='2xl' color='gray.500'>Primo indirizzo: </Text>{updatedUser.addressOne}
                            <Text fontSize='2xl' color='gray.500'>Secondo indirizzo: </Text>{updatedUser.addressTwo}
                            <Text fontSize='2xl' color='gray.500'>Citta': </Text>{updatedUser.city}
                            <Text fontSize='2xl' color='gray.500'>Provincia: </Text>{updatedUser.province}
                            <Text fontSize='2xl' color='gray.500'>Data di creazione: </Text>{formatDateString(updatedUser.createdAt)}
                        
                        </>
                    )}
                </Stack>
                <Stack direction='row' justifyContent='center' marginBottom={5} spacing={4}>
                    {editMode ?
                        <>
                            <Button colorScheme='green' onClick={handleSave} isDisabled={!validInput}>Salva</Button>
                            <ConfirmationModalComponent handleDeleteConfirmation={handleDeleteConfirmation} />
                            <Button onClick={handleCancel}>Annulla</Button>
                        </>
                        :
                        <>
                            <Button colorScheme='blue' onClick={() => setEditMode(true)}>Modifica</Button>
                            <Button onClick={() => navigate('/')}>Torna indietro</Button>
                        </>
                    }
                </Stack>
            </Box>
        </Center>
    )
}