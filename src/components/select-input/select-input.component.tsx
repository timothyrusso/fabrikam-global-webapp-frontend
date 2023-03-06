import { FC, ChangeEvent } from 'react';
import { SelectInputComponentProps } from '../../types/generic-types';
import { FormControl, FormLabel, Text } from '@chakra-ui/react';

export const SelectInputComponent: FC<SelectInputComponentProps> = ({
  inputValue,
  name,
  handleChange,
  classStyle,
  label,
  isTableRow,
  register,
  errors
}) => {
  const errorMessage = errors[name]?.message?.toString()

  return (
    <FormControl mt={isTableRow ? 0 : 4}>
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
      <select
        id={name}
        placeholder="Seleziona azienda"
        value={inputValue}
        className={`input ${classStyle}`}
        {...register(name, {
          onChange: (event: ChangeEvent<HTMLSelectElement>) => handleChange(event),
          required: 'Campo obbligatorio',
        })}
      >
        <option value='FabrikDistribution'>FabrikDistribution</option>
        <option value='FabrikStore'>FabrikStore</option>
        <option value='Fabrikam'>Fabrikam</option>
      </select>
      {errors[name] ? <Text fontSize='md' color='red.500'>{errorMessage}</Text> : null}
    </FormControl>
  );
};
