import { combineReducers } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/usersSlice";
import { authSlice } from "./slices/authSlice";

export const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer, 
    [usersSlice.name]: usersSlice.reducer, 
})