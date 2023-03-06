import { FC, ChangeEvent } from 'react';
import { GenericInputComponentProps } from '../../types/generic-types';
import { FormControl, FormLabel, Text } from '@chakra-ui/react';
import { excludedDateInputNames } from '../../utils/constants';

export const DateInputComponent: FC<GenericInputComponentProps> = ({
  inputValue,
  name,
  handleChange,
  classStyle,
  label,
  isTableRow,
  register,
  errors
}) => {
  const isRequired = !excludedDateInputNames.includes(name);

  return (
    <FormControl mt={isTableRow ? 0 : 4}>
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
      <input
        id={name}
        value={inputValue}
        type="date"
        min="1900-01-01"
        max="2100-12-31"
        name={name}
        className={`input ${classStyle}`}
        {...register(name, {
          onChange: (event: ChangeEvent<HTMLInputElement>) => handleChange(event),
          required: isRequired ? 'Campo obbligatorio' : false,
        })}
      />
      {errors[name]?.message.length > 0 ? <Text fontSize='md' color='red.500'>{errors[name]?.message}</Text> : null}
    </FormControl>
  );
};
