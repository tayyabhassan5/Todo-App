import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import { persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'; 
import todoReducer from './todoSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer:{ 
    todos:persistedReducer,
  }
});

export const persistor = persistStore(store);
