// store.ts
import { configureStore, Middleware } from '@reduxjs/toolkit';
import { api } from '../services/ElementList.services'; 
import tasksReducer from "./tasks/slice";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    tasks: tasksReducer
  },
  middleware:  (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, persistanceLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;