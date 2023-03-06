import { FC } from 'react';
import { GenericInputComponentProps } from '../../types/generic-types';
import { FormControl, FormLabel } from '@chakra-ui/react';

export const DateInputComponent: FC<GenericInputComponentProps> = ({
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
        type="date"
        min="1900-01-01"
        max="2100-12-31"
        name={name}
        className={`input ${classStyle}`}
      />
    </FormControl>
  );
};
