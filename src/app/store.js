import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedReducer = persistReducer({
  key: 'root',
  storage: storage,
  version: 1,
  whitelist: ['auth', 'users']
}, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)
