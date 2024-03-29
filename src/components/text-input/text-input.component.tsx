import { FC, ChangeEvent } from 'react';
import { GenericInputComponentProps } from '../../types/generic-types';
import { FormControl, FormLabel, Text } from '@chakra-ui/react';
import { excludedTextInputNames } from '../../utils/constants';

export const TextInputComponent: FC<GenericInputComponentProps> = ({
  inputValue,
  name,
  handleChange,
  classStyle,
  label,
  isTableRow,
  register,
  errors,
}) => {
  const isRequired = !excludedTextInputNames.includes(name);

  const errorMessage = errors[name]?.message?.toString();

  const containsDigits = /\d/;

  const validateInput = (value: string) => {
    if (name === 'firstName' || name === 'lastName') {
      if (containsDigits.test(value)) {
        return 'Il campo non deve contenere numeri';
      }
    }
    return true;
  };

  return (
    <FormControl mt={isTableRow ? 0 : 4}>
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
      <input
        id={name}
        value={inputValue}
        className={`input ${classStyle}`}
        {...register(name, {
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event),
          required: isRequired ? 'Campo obbligatorio' : false,
          maxLength: {
            value: 30,
            message: 'Inserire massimo 30 caratteri',
          },
          validate: validateInput,
        })}
      />
      {errors[name] ? (
        <Text fontSize="md" color="red.500">
          {errorMessage}
        </Text>
      ) : null}
    </FormControl>
  );
};
