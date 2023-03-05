import { FETCH_USERS, UPDATE_USER, DELETE_USER } from "./action.types";
import { User } from "../utils/generic-types";

type FetchUsersAction = {
    type: typeof FETCH_USERS;
    payload: User[];
}

type UpdateUserAction = {
    type: typeof UPDATE_USER;
    payload: User;
}

type DeleteUserAction = {
    type: typeof DELETE_USER;
    payload: User;
}

export type UserActionTypes = FetchUsersAction | UpdateUserAction | DeleteUserAction;

export const fetchUsersAction = (users: User[]): FetchUsersAction => ({
    type: FETCH_USERS,
    payload: users,
});

export const updateUserAction = (updatedUser: User): UpdateUserAction => ({
    type: UPDATE_USER,
    payload: updatedUser,
});

export const deleteUserAction = (deletedUser: User): DeleteUserAction => ({
    type: DELETE_USER,
    payload: deletedUser,
});