import { FC } from "react";
import { Td } from "@chakra-ui/react";

export type NumberInputComponentProps = {
    inputValue: number;
    name: string;
    handleChange: any;
}

export const NumberInputComponent: FC<NumberInputComponentProps> = ({ inputValue, name, handleChange }) => {
    return (
        <Td>
            <input
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
                onChange={handleChange}
                name={name}
                maxLength={5}
                minLength={5}
                placeholder={name}
                value={inputValue}
                className='input'
            />
        </Td>
    )
}