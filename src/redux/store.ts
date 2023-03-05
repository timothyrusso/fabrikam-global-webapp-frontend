import { createStore } from 'redux';
import { UserActionTypes } from './action.helpers';
import { User } from '../utils/generic-types';

export type RootState = {
    users: User[];
  }

const initialState: RootState = {
    users: []
};

const reducer = (state = initialState, action: UserActionTypes) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload.id) {
                        return action.payload;
                    }
                    return user;
                })
            }
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload.id)
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
