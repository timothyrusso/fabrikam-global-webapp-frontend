import { User } from "../utils/generic-types";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { updateUser, deleteUser, createUser, getAllUsers } from "../utils/api";
import { toastUpdateSuccess, toastGenericError, toastDeleteSuccess, toastCreateSuccess } from "../utils/toast.config";
import { useNavigate } from "react-router-dom";

export const useFabrikamApi = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const toast = useToast()

    const goToHomePage = () => navigate('/')

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
        toast(toastDeleteSuccess)
        goToHomePage()
      })
      .catch(handleApiError);
  };

  const handleCreateUser = (createdUser: User) => {
    createUser({ ...createdUser })
      .then(() => {
        toast(toastCreateSuccess);
        return getAllUsers()
      }
      ).then((response) => {
        dispatch({ type: 'FETCH_USERS', payload: response });
      })
      .catch(handleApiError);
  };

  return {
    handleUpdateUser,
    handleDeleteUser,
    handleCreateUser,
  };
};
