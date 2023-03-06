import { BASE_URL } from '../utils/constants';
import { User } from '../types/generic-types';

const checkResponse = <T>(res: Response): Promise<T> => {
  if (res.ok) {
    console.log(
      `URL: ${res.url}
  Status: ${res.statusText}
  Status code: ${res.status}`
    );
    return res.json() as Promise<T>;
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const getAllUsers = (): Promise<User[]> => {
  return fetch(`${BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse as (res: Response) => Promise<User[]>);
};

export const createUser = (userData: User): Promise<User> => {
  const { 
    firstName,
    lastName,
    birthDay,
    company,
    startDate,
    endDate,
    addressOne,
    addressTwo,
    city,
    province,
    userId
  } = userData;

  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      birthDay,
      company,
      startDate,
      endDate,
      addressOne,
      addressTwo,
      city,
      province,
      userId,
    }),
  }).then(checkResponse) as Promise<User>;
};

export const updateUser = (userData: User): Promise<User> => {
  const { 
    firstName,
    lastName,
    birthDay,
    company,
    startDate,
    endDate,
    addressOne,
    addressTwo,
    city,
    province,
    userId,
    id
  } = userData;

  return fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      birthDay,
      company,
      startDate,
      endDate,
      addressOne,
      addressTwo,
      city,
      province,
      userId,
    }),
  }).then(checkResponse) as Promise<User>;
};

export const deleteUser = ({ id }: { id: number }): Promise<void> => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse) as Promise<void>;
};
