import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getAllCocktails: builder.query({
      query: () => "data/cocktails.json",
    }),
  }),
});

export const { useGetAllCocktailsQuery } = cocktailApi;
