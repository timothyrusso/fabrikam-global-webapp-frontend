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
import {
  fetchUsersState,
  updateUserState,
  deleteUserState,
} from '../redux/userSlice';

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
        dispatch(updateUserState(newUser));
      })
      .catch(handleApiError);
  };

  const handleDeleteUser = (updatedUser: User) => {
    deleteUser({ id: updatedUser.id })
      .then(() => {
        dispatch(deleteUserState(updatedUser));
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
        dispatch(fetchUsersState(response));
      })
      .catch(handleApiError);
  };

  return {
    handleUpdateUser,
    handleDeleteUser,
    handleCreateUser,
  };
};
