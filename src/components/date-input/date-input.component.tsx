import { FC } from "react"
import { Td } from '@chakra-ui/react';

export type DateInputComponentProps = {
    inputValue: string;
    name: string;
    handleChange: any;
}

export const DateInputComponent: FC<DateInputComponentProps> = ({ inputValue, name, handleChange }) => {

    return (
        <Td>
            <input
                value={inputValue}
                onChange={handleChange}
                type='date'
                min="1900-01-01" max="2100-12-31"
                name={name}
                className='input'
            />
        </Td>
    )
}