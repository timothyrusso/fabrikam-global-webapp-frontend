import { FC } from "react"

export type TextInputComponentProps = {
    inputValue?: string;
    name: string;
    handleChange: any;
    classStyle?: string;
}

export const TextInputComponent: FC<TextInputComponentProps> = ({ inputValue, name, handleChange, classStyle }) => {
    return (
        <input
            value={inputValue}
            onChange={handleChange}
            placeholder={name}
            name={name}
            className={`input ${classStyle}`}
        />
    )
}