import { FC } from 'react';
import { SelectInputComponentProps } from '../../types/generic-types';
import { FormControl, FormLabel } from '@chakra-ui/react';

export const SelectInputComponent: FC<SelectInputComponentProps> = ({
  inputValue,
  name,
  handleChange,
  classStyle,
  label,
  isTableRow
}) => {

  return (
    <FormControl mt={isTableRow ? 0 : 4}>
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
      <select
        id={name}
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
    </FormControl>
  );
};
