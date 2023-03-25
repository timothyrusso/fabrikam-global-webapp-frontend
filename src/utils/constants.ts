import { User } from '../types/generic-types';

export const BASE_URL = 'https://fabrikam-global-webapp.onrender.com';

export const selectDefaultValue = {
  company: 'FabrikDistribution',
} as User;

export const excludedTextInputNames = [
  'addressOne',
  'addressTwo',
  'city',
  'province',
];

export const excludedDateInputNames = ['endDate'];
