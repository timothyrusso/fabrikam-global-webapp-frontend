import { FC } from 'react';
import { SelectInputComponentProps } from '../../utils/generic-types';

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
      <option value='FabrikDistribution'>FabrikDistribution</option>
      <option value='FabrikStore'>FabrikStore</option>
      <option value='Fabrikam'>Fabrikam</option>
    </select>
  );
};
