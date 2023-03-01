import { FC } from "react"

export type SelectInputComponentProps = {
    inputValue?: string;
    name: string;
    handleChange: any;
    classStyle?: string;
}

export const SelectInputComponent: FC<SelectInputComponentProps> = ({ inputValue, name, handleChange, classStyle }) => {
    return (
            <select placeholder='Seleziona azienda'
                value={inputValue}
                onChange={handleChange}
                name={name}
                className={`input ${classStyle}`}
            >
                <option>Fabrikam</option>
                <option>FabrikStore</option>
                <option>FabrikDistribution</option>
            </select>
    )
}