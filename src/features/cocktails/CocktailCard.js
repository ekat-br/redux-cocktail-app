import { styled } from "styled-components";
import FavoriteButton from "../favorites/FavoriteButton";

export default function CocktailCard({ cocktail }) {
  return (
    <CardContainer>
      <CocktailTitle>{cocktail.strDrink}</CocktailTitle>{" "}
      <span>{cocktail.strAlcoholic}</span>
      <CocktailImage
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />{" "}
      <FavoriteButton id={cocktail.idDrink} />
    </CardContainer>
  );
}

const CardContainer = styled.li`
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  background-color: #f6f6f6; 
`;

const CocktailImage = styled.img`
  max-height: 200px;
  width: auto;
  margin-bottom: 16px;
  border-radius: 7px;
`;

const CocktailTitle = styled.h2`
  color: #333333;
  font-size: 24px;
  margin-bottom: 12px;
`;
