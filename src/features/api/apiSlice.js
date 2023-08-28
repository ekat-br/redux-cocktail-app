import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getAllCocktails: builder.query({
      query: () => "search.php?s=",
    }),
    getCocktail: builder.query({
      query: (product) => `search.php?s=${product}`,
    }),
  }),
});

export const { useGetAllCocktailsQuery, useGetCocktailQuery } = cocktailApi;
