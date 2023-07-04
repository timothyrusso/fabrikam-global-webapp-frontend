import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { User } from '../types/generic-types';

export type RootState = {
  users: User[];
};

const initialState: RootState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUsersState: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    updateUserState: (state, action: PayloadAction<User>) => {
      const { id } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUserState: (state, action: PayloadAction<{ id: number }>) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { fetchUsersState, updateUserState, deleteUserState } =
  userSlice.actions;

export const store = configureStore({
  reducer: userSlice.reducer,
});
