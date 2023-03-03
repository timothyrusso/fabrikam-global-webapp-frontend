import { UseToastOptions } from "@chakra-ui/react"

export const toastUpdateSuccess: UseToastOptions = {
    position: 'top',
    title: 'Informazioni aggiornate.',
    status: 'success',
    duration: 3000,
    isClosable: true,
}

export const toastDeleteSuccess: UseToastOptions = {
    position: 'top',
    title: 'Risorsa eliminata.',
    status: 'success',
    duration: 3000,
    isClosable: true,
}

export const toastCreateSuccess: UseToastOptions = {
    position: 'top',
    title: 'Nuova risorsa creata.',
    status: 'success',
    duration: 3000,
    isClosable: true,
}

export const toastGenericError = (error: Error): UseToastOptions => ({
    position: 'top',
    title: `Si e' verificato un errore.`,
    description: error.message,
    status: 'error',
    duration: 3000,
    isClosable: true,
  })

  export const toastFetchError = (error: Error): UseToastOptions => ({
    position: 'top',
    title: `Errore nel caricamento dei dati.`,
    description: error.message,
    status: 'error',
    duration: 3000,
    isClosable: true,
  })