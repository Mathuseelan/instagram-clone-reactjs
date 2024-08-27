import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.data = action.payload;
    },
    removeAuth: (state, action) => {
      state.data = null;
    },
  },
});

export const { removeAuth, setAuth } = authSlice.actions;

export function getAuth(state) {
  return state.auth.data;
}
