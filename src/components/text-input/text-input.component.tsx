import { FC } from 'react';
import { GenericInputComponentProps } from '../../types/generic-types';
import { FormControl, FormLabel } from '@chakra-ui/react';

export const TextInputComponent: FC<GenericInputComponentProps> = ({
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
      <input
        id={name}
        value={inputValue}
        onChange={handleChange}
        name={name}
        className={`input ${classStyle}`}
      />
    </FormControl>
  );
};
