import { Box, Center, Avatar, FormControl, FormLabel, Stack, Text, Button } from "@chakra-ui/react"
import { NumberInputComponent } from "../../components/number-input/number-input.component"
import { TextInputComponent } from "../../components/text-input/text-input.component"
import { SelectInputComponent } from "../../components/select-input/select-input.component"
import { DateInputComponent } from "../../components/date-input/date-input.component"
import { FC, useState, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatDateString } from "../../utils/helpers"

export const UserPageComponent = () => {
    const location = useLocation();
    const user = location.state?.user;
    const navigate = useNavigate()

    return (
        <Center marginTop={20}>
            <Box maxWidth='500px' borderWidth='2px' borderRadius='lg' overflow='hidden'>
                <Avatar marginTop={10} name={`${user.firstName} ${user.lastName}`} />
                <Stack spacing={3} justifyContent='center' p={10}>
                    <Text fontSize='4xl'>{user.firstName} {user.lastName}</Text>
                    <Text fontSize='2xl'>Data di nascita: {user.birthDay}</Text>
                    <Text fontSize='2xl'>Societa': {user.company}</Text>
                    <Text fontSize='2xl'>Data di inizio: {user.startDate}</Text>
                    <Text fontSize='2xl'>Data di fine: {user.endDate}</Text>
                    <Text fontSize='2xl'>Indirizzo 1: {user.addressOne}</Text>
                    <Text fontSize='2xl'>Indirizzo 2: {user.addressTwo}</Text>
                    <Text fontSize='2xl'>Citta': {user.city}</Text>
                    <Text fontSize='2xl'>Provincia: {user.province}</Text>
                    <Text fontSize='2xl'>Data di creazione: {formatDateString(user.createdAt)}</Text>
                    <Text fontSize='2xl'>userId: {user.userId}</Text>
                </Stack>
                <Stack direction='row' justifyContent='center' marginBottom={5} spacing={7}>
                    <Button colorScheme='blue'>Modifica</Button>
                    <Button onClick={() => navigate('/')}>Torna indietro</Button>
                </Stack>
            </Box>
        </Center>
    )
}