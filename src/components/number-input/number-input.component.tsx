import { FC } from "react";
import { NumberInputComponentProps } from "../../utils/genericTypes";

export const NumberInputComponent: FC<NumberInputComponentProps> = ({ inputValue, name, handleChange, classStyle }) => {
    return (
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
                className={`input ${classStyle}`}
            />
    )
}