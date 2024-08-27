import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.data.push(action.payload);
    },
  },
});


export const { createUser } = usersSlice.actions;

export function getUsers(state) {
  return state.users.data
}