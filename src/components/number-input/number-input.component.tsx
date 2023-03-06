import { FC } from 'react';
import { NumberInputComponentProps } from '../../utils/generic-types';
import { FormControl, FormLabel } from '@chakra-ui/react';

export const NumberInputComponent: FC<NumberInputComponentProps> = ({
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
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            name={name}
            id={name}
            maxLength={5}
            value={inputValue}
            className={`input ${classStyle}`}
            onChange={handleChange}
          />
    </FormControl>
  );
};
