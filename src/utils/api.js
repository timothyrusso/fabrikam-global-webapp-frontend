import { BASE_URL } from './constants';

const checkResponse = (res) => {
  if (res.ok) {
    console.log(
      `URL: ${res.url}
  Status: ${res.statusText}
  Status code: ${res.status}`
    );
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const getAllUsers = () => {
  return fetch(`${BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};

export const createUser = ({
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
}) => {
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
  }).then(checkResponse);
};

export const updateUser = ({
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
}) => {
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
  }).then(checkResponse);
};

export const deleteUser = ({ id }) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};
