import { FC } from 'react';
import { GenericInputComponentProps } from '../../utils/generic-types';

export const TextInputComponent: FC<GenericInputComponentProps> = ({
  inputValue,
  name,
  handleChange,
  classStyle,
}) => {
  return (
    <input
      value={inputValue}
      onChange={handleChange}
      placeholder={name}
      name={name}
      className={`input ${classStyle}`}
    />
  );
};
