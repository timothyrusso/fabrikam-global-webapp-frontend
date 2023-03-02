import { Box, Center, Avatar, FormControl, FormLabel, Stack, Text, Button } from "@chakra-ui/react"
import { NumberInputComponent } from "../../components/number-input/number-input.component"
import { TextInputComponent } from "../../components/text-input/text-input.component"
import { SelectInputComponent } from "../../components/select-input/select-input.component"
import { DateInputComponent } from "../../components/date-input/date-input.component"
import { FC, useState, ChangeEvent } from 'react';

export const UserPageComponent = () => {

    return (
        <Center marginTop={20}>
            <Box w='85%' borderWidth='2px' borderRadius='lg' overflow='hidden'>
                <Avatar marginTop={10} name='Oshigaki Kisame' />
                <Stack spacing={3} marginTop={5} marginBottom={5}>
                    <Text fontSize='4xl'>Timothy Russo</Text>
                    <Text fontSize='2xl'>Data di nascita: </Text>
                    <Text fontSize='2xl'>Societa': </Text>
                    <Text fontSize='2xl'>Data di inizio: </Text>
                    <Text fontSize='2xl'>Data di fine: </Text>
                    <Text fontSize='2xl'>Indirizzo 1: </Text>
                    <Text fontSize='2xl'>Indirizzo 2: </Text>
                    <Text fontSize='2xl'>Citta': </Text>
                    <Text fontSize='2xl'>Provincia: </Text>
                    <Text fontSize='2xl'>Data di creazione: </Text>
                    <Text fontSize='2xl'>userId: </Text>
                </Stack>
                <Stack direction='row' justifyContent='center' marginBottom={5} spacing={7}>
                    <Button colorScheme='blue'>Modifica</Button>
                    <Button>Torna indietro</Button>
                </Stack>
            </Box>
        </Center>
    )
}