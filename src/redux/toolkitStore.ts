import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { User } from '../types/generic-types';

type RootState = {
  users: User[];
};

const initialState: RootState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const { id } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<{ id: number }>) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { fetchUsers, updateUser, deleteUser } = userSlice.actions;

export const toolkitStore = configureStore({
  reducer: userSlice.reducer,
});
