import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "../features/api/apiSlice";
import { favoritesSlice } from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cocktailApi.middleware),
});
