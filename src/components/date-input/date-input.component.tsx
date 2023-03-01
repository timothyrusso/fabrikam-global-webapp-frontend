import { FC } from "react"

export type DateInputComponentProps = {
    inputValue?: string;
    name: string;
    handleChange: any;
    classStyle?: string;
}

export const DateInputComponent: FC<DateInputComponentProps> = ({ inputValue, name, handleChange, classStyle }) => {

    return (
            <input
                value={inputValue}
                onChange={handleChange}
                type='date'
                min="1900-01-01" max="2100-12-31"
                name={name}
                className={`input ${classStyle}`}
            />
    )
}