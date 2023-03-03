import { FC } from 'react';
import { GenericInputComponentProps } from '../../utils/generic-types';

export const DateInputComponent: FC<GenericInputComponentProps> = ({
  inputValue,
  name,
  handleChange,
  classStyle,
}) => {
  return (
    <input
      value={inputValue}
      onChange={handleChange}
      type="date"
      min="1900-01-01"
      max="2100-12-31"
      name={name}
      className={`input ${classStyle}`}
    />
  );
};
