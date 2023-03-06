import { FC } from 'react';
import { NumberInputComponentProps } from '../../types/generic-types';
import { FormControl, FormLabel, Text } from '@chakra-ui/react';

export const NumberInputComponent: FC<NumberInputComponentProps> = ({
  inputValue,
  name,
  handleChange,
  classStyle,
  label,
  isTableRow,
  register,
  errors
}) => {
  return (
    <FormControl mt={isTableRow ? 0 : 4}>
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
          <input
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            id={name}
            className={`input ${classStyle}`}
            value={inputValue}
            maxLength="5"
            minLength="5"
            {...register(name, {
              onChange: (event: any) => handleChange(event),
              required: 'Campo obbligatorio',
              minLength: {
                value: 5,
                message: 'Inserire minimo 5 caratteri'
              },
            })}
          />
          {errors[name]?.message.length > 0 ? <Text color='red.500'>{errors[name]?.message}</Text> : null}
    </FormControl>
  );
};
