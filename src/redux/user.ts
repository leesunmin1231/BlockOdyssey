import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
}

let tempId = 3;

export const users = createSlice({
  name: 'users',
  initialState: [
    { id: 1, name: 'User1' },
    { id: 2, name: 'User2' },
  ],
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      tempId += 1;
      return [...state, { ...action.payload, id: tempId }];
    },
  },
});

export const { addUser } = users.actions;
export default users.reducer;
