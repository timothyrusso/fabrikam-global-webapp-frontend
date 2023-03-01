import { ChangeEvent } from 'react';

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
};

export type SelectInputComponentProps = {
  inputValue?: string;
  name: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  classStyle?: string;
};

export type NumberInputComponentProps = {
  inputValue?: number;
  name: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  classStyle?: string;
};
