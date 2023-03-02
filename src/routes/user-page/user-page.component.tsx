import { Box, Center, Avatar, FormLabel, Stack, Text, Button } from "@chakra-ui/react"
import { NumberInputComponent } from "../../components/number-input/number-input.component"
import { TextInputComponent } from "../../components/text-input/text-input.component"
import { SelectInputComponent } from "../../components/select-input/select-input.component"
import { DateInputComponent } from "../../components/date-input/date-input.component"
import { FC, useState, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatDateString } from "../../utils/helpers"
import { User } from "../../utils/genericTypes"

export type UserPageComponentProps = {
    onUpdateUser: (index: number, updatedUser: User) => void;
    users: User[];
}

export const UserPageComponent: FC<UserPageComponentProps> = ({ onUpdateUser, users }) => {
    const location = useLocation();

    const user = location.state?.user;

    const [editMode, setEditMode] = useState(false);
    const [updatedUser, setUpdatedUser] = useState<User>(user);

    const navigate = useNavigate()

    const handleChange = (
        event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setUpdatedUser((updatedUser) => ({ ...updatedUser, [name]: value }));
    };

    const handleSave = () => {
        const index = users.findIndex(object => object.userId === updatedUser.userId);
        if (index !== -1) {
            onUpdateUser(index, updatedUser);
            setEditMode(false);
        }
    };

    return (
        <Center marginTop={20}>
            <Box maxWidth='700px' minWidth='350' borderWidth='2px' borderRadius='lg' overflow='hidden'>
                <Avatar marginTop={10} name={`${updatedUser.firstName} ${updatedUser.lastName}`} />
                <Stack spacing={3} justifyContent='center' p={5}>
                    {editMode ? (
                        <>
                            <FormLabel marginBottom={0}>userId</FormLabel>
                            <NumberInputComponent
                                inputValue={updatedUser.userId}
                                name="userId"
                                handleChange={handleChange}
                                classStyle='modal'
                            />
                            <FormLabel>Nome</FormLabel>
                            <TextInputComponent
                                inputValue={updatedUser.firstName}
                                name="firstName"
                                handleChange={handleChange}
                                classStyle='modal'
                            />
                            <FormLabel>Cognome</FormLabel>
                            <TextInputComponent
                                inputValue={updatedUser.lastName}
                                name="lastName"
                                handleChange={handleChange}
                                classStyle='modal'
                            />
                            <FormLabel>Data di nascita</FormLabel>
                            <DateInputComponent
                                inputValue={updatedUser.birthDay}
                                name="birthDay"
                                handleChange={handleChange}
                                classStyle='modal'
                            />
                            <FormLabel>Societa'</FormLabel>
                            <SelectInputComponent
                                inputValue={updatedUser.company}
                                name="company"
                                handleChange={handleChange}
                                classStyle='modal'
                            />
                            <FormLabel>Data di inizio</FormLabel>
                            <DateInputComponent
                                inputValue={updatedUser.startDate}
                                name="startDate"
                                handleChange={handleChange}
                                classStyle='modal'
                            />
                            <FormLabel>Data di fine</FormLabel>
                            <DateInputComponent
                                inputValue={updatedUser.endDate}
                                name="endDate"
                                handleChange={handleChange}
                                classStyle='modal'
                            />
                            <FormLabel>Indirizzo 1</FormLabel>
                            <TextInputComponent
                                inputValue={updatedUser.addressOne}
                                name="addressOne"
                                handleChange={handleChange}
                                classStyle='modal'
                            />
                            <FormLabel>Indirizzo 2</FormLabel>
                            <TextInputComponent
                                inputValue={updatedUser.addressTwo}
                                name="addressTwo"
                                handleChange={handleChange}
                                classStyle='modal'
                            />
                            <FormLabel>Citta'</FormLabel>
                            <TextInputComponent
                                inputValue={updatedUser.city}
                                name="city"
                                handleChange={handleChange}
                                classStyle='modal'
                            />
                            <FormLabel>Provincia</FormLabel>
                            <TextInputComponent
                                inputValue={updatedUser.province}
                                name="province"
                                handleChange={handleChange}
                                classStyle='modal'
                            />
                        </>
                    ) : (
                        <>
                            <Text fontSize='4xl'>{updatedUser.firstName} {updatedUser.lastName}</Text>
                            <Text fontSize='2xl'>Data di nascita: {updatedUser.birthDay}</Text>
                            <Text fontSize='2xl'>Societa': {updatedUser.company}</Text>
                            <Text fontSize='2xl'>Data di inizio: {updatedUser.startDate}</Text>
                            <Text fontSize='2xl'>Data di fine: {updatedUser.endDate}</Text>
                            <Text fontSize='2xl'>Indirizzo 1: {updatedUser.addressOne}</Text>
                            <Text fontSize='2xl'>Indirizzo 2: {updatedUser.addressTwo}</Text>
                            <Text fontSize='2xl'>Citta': {updatedUser.city}</Text>
                            <Text fontSize='2xl'>Provincia: {updatedUser.province}</Text>
                            <Text fontSize='2xl'>Data di creazione: {formatDateString(updatedUser.createdAt)}</Text>
                            <Text fontSize='2xl'>userId: {updatedUser.userId}</Text>
                        </>
                    )}
                </Stack>
                <Stack direction='row' justifyContent='center' marginBottom={5} spacing={7}>
                    {editMode ?
                        <>
                            <Button colorScheme='green' onClick={handleSave}>Salva</Button>
                            <Button onClick={() => setEditMode(false)}>Annulla</Button>
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