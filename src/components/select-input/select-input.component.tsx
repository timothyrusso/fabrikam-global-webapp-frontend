import { FC } from "react"
import { Td } from "@chakra-ui/react"

export type SelectInputComponentProps = {
    inputValue: string;
    name: string;
    handleChange: any;
}

export const SelectInputComponent: FC<SelectInputComponentProps> = ({ inputValue, name, handleChange }) => {
    return (
        <Td>
            <select placeholder='Seleziona azienda'
                value={inputValue}
                onChange={handleChange}
                name={name}
                className='input'
            >
                <option>Fabrikam</option>
                <option>FabrikStore</option>
                <option>FabrikDistribution</option>
            </select>
        </Td>
    )
}