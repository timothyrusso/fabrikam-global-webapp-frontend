import { User } from '../types/generic-types';
import { useDispatch } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { updateUser, deleteUser, createUser, getAllUsers } from '../api/api';
import {
  toastUpdateSuccess,
  toastGenericError,
  toastDeleteSuccess,
  toastCreateSuccess,
} from '../utils/toast.config';
import { fetchUsers } from '../redux/store';

export const useFabrikamApi = () => {
  const dispatch = useDispatch();

  const toast = useToast();

  const handleApiError = (err: Error) => {
    toast(toastGenericError(err));
    console.log(err);
  };

  const handleUpdateUser = (newUser: User) => {
    updateUser({ ...newUser, id: newUser.id })
      .then(() => {
        toast(toastUpdateSuccess);
        dispatch({ type: 'UPDATE_USER', payload: newUser });
      })
      .catch(handleApiError);
  };

  const handleDeleteUser = (updatedUser: User) => {
    deleteUser({ id: updatedUser.id })
      .then(() => {
        dispatch({ type: 'DELETE_USER', payload: updatedUser });
        toast(toastDeleteSuccess);
      })
      .catch(handleApiError);
  };

  const handleCreateUser = (createdUser: User) => {
    createUser({ ...createdUser })
      .then(() => {
        toast(toastCreateSuccess);
        return getAllUsers();
      })
      .then((response) => {
        dispatch({ type: 'FETCH_USERS', payload: response });
        dispatch(fetchUsers(response));
      })
      .catch(handleApiError);
  };

  return {
    handleUpdateUser,
    handleDeleteUser,
    handleCreateUser,
  };
};
