import { useGetAllCocktailsQuery } from "../features/api/apiSlice";
import CocktailCard from "./CocktailCard";
import { styled } from "styled-components";
import { useState } from "react";

const CocktailsList = () => {

  const { data, isLoading, isError } = useGetAllCocktailsQuery();
  const [visibleCocktails, setVisibleCocktails] = useState(2);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  function handleShowMoreCocktails() {
    setVisibleCocktails(visibleCocktails +2);
  }



  return (
    <>
      <CocktailListTitle>Let's enjoy some cocktails</CocktailListTitle>
      <CocktailListContainer>
        {data.drinks.slice(0,visibleCocktails).map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </CocktailListContainer>
      <ButtonContainer>
       <Button onClick={handleShowMoreCocktails}>Show more cocktails</Button>
      </ButtonContainer>
      
    </>
  );
};

export default CocktailsList;

const CocktailListContainer = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 800px; 
  margin: 0 auto; 

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* One column for mobile view */
  }
`;

const CocktailListTitle = styled.h2`
  font-size: 28px;
  color: #8390fa;
  margin-bottom: 16px;
  text-align: center;
`;
const ButtonContainer = styled.div`
  text-align: center;
`;
const Button = styled.button`
background-color: #8390fa;
color: #ffff;
border: none; 
padding: 8px 16px; 
border-radius: 4px; 
margin: 20px ;
`

