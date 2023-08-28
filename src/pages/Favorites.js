import React from "react";
import { useSelector } from "react-redux";
import { selectFavorizedIds } from "../features/favorize/favorizeSlice";
import { useGetAllCocktailsQuery } from "../features/api/apiSlice";

const Favorites = () => {
  const favorizedIds = useSelector(selectFavorizedIds);
  const { data, isLoading, isError } = useGetAllCocktailsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const favorizedCocktails = data.drinks.filter((cocktail) =>
    favorizedIds.includes(cocktail.idDrink)
  );

  return (
    <div>
      <h2>Your Favorized Cocktails</h2>
      <ul>
        {favorizedCocktails ? (
          favorizedCocktails.map((cocktail) => (
            <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
          ))
        ) : (
          <li>No favorized cocktails found.</li>
        )}
      </ul>
    </div>
  );
};

export default Favorites;
