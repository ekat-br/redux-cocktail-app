import React from "react";
import { useSelector } from "react-redux";
import { selectFavoritesIds } from "./favoritesSlice";
import { useGetAllCocktailsQuery } from "../api/apiSlice";

const FavoritesPage = () => {
  const favorizedIds = useSelector(selectFavoritesIds);
  const { data, isLoading, isError } = useGetAllCocktailsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const favoriteCocktails = data.drinks.filter((cocktail) =>
    favorizedIds.includes(cocktail.idDrink)
  );

  return (
    <div>
      <h2>Your Favorized Cocktails</h2>
      <ul>
        {favoriteCocktails ? (
          favoriteCocktails.map((cocktail) => (
            <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
          ))
        ) : (
          <li>No favorized cocktails found.</li>
        )}
      </ul>
    </div>
  );
};

export default FavoritesPage;
