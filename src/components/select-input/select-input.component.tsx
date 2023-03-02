import { FC } from 'react';
import { SelectInputComponentProps } from '../../utils/genericTypes';

export const SelectInputComponent: FC<SelectInputComponentProps> = ({
  inputValue,
  name,
  handleChange,
  classStyle,
}) => {
  return (
    <select
      placeholder="Seleziona azienda"
      value={inputValue}
      onChange={handleChange}
      name={name}
      className={`input ${classStyle}`}
    >
      <option>FabrikDistribution</option>
      <option>FabrikStore</option>
      <option>Fabrikam</option>
    </select>
  );
};
