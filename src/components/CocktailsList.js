import { useGetAllCocktailsQuery } from "../features/api/apiSlice";
import CocktailCard from "./CocktailCard";
import { styled } from "styled-components";
import { useState } from "react";

const CocktailsList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetAllCocktailsQuery();

  const perPage = 5;

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <CocktailListTitle>Let's enjoy some cocktails</CocktailListTitle>
      <CocktailListContainer>
        {data.drinks.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </CocktailListContainer>
      <button onClick={prevPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
    </>
  );
};

export default CocktailsList;

const CocktailListContainer = styled.ul`
  padding: 0;
`;

const CocktailListTitle = styled.h2`
  font-size: 28px;
  color: #8390fa;
  margin-bottom: 16px;
  text-align: center;
`;
