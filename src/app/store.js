import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "../features/api/apiSlice";
import favorizeReducer from "../features/favorize/favorizeSlice";

export const store = configureStore({
  reducer: {
    favorize: favorizeReducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailApi.middleware),
});
