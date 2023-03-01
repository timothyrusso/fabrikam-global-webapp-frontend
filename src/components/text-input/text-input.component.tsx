import { FC } from "react"
import { Td } from "@chakra-ui/react"

export type TextInputComponentProps = {
    inputValue: string;
    name: string;
    handleChange: any;
}

export const TextInputComponent: FC<TextInputComponentProps> = ({ inputValue, name, handleChange }) => {
    return (
        <Td><input
            value={inputValue}
            onChange={handleChange}
            placeholder={name}
            name={name}
            className='input'
        /></Td>
    )
}