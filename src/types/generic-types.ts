import { ChangeEvent } from 'react';
import { RegisterOptions, FieldErrors } from 'react-hook-form';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  birthDay: string;
  company: string;
  startDate: string;
  endDate: string;
  addressOne: string;
  addressTwo: string;
  city: string;
  province: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
};

export type GenericInputComponentProps = {
  inputValue?: string;
  name: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  classStyle?: string;
  label?: string;
  isTableRow?: boolean;
  register?: any;
  errors?: any;
};

export type SelectInputComponentProps = {
  inputValue?: string;
  name: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  classStyle?: string;
  label?: string;
  isTableRow?: boolean;
  register?: any;
  errors?: any;
};

export type NumberInputComponentProps = {
  inputValue?: number;
  name: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  classStyle?: string;
  label?: string;
  isTableRow?: boolean;
  register?: any;
  errors?: any;
};
