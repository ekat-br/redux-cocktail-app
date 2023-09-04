import { styled } from "styled-components";
import FavoriteButton from "../favorites/FavoriteButton";
import { useState } from "react";

export default function CocktailCard({ cocktail }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function toggleFlip () {
    setIsFlipped(!isFlipped);
  }

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <CardContainer>
      <Card isFlipped={isFlipped} onClick={toggleFlip}>
        <CardFront>
          <CocktailTitle>{cocktail.strDrink}</CocktailTitle>
          <CocktailImage src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <FavoriteButton id={cocktail.idDrink}/>
        </CardFront>
        <CardBack>
          <h3>Ingredients:</h3>
          {ingredients.map((ingredient, index) => (
          <IngredientItem key={index}>{ingredient}</IngredientItem>
        ))}
          <h3>Instructions:</h3>
          <Instruction>{cocktail.strInstructions}</Instruction>
        </CardBack>
      </Card>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  perspective: 1000px;
  background-color: #f6f6f6; 
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  text-align: center;
  margin: 0 auto;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${(props) => (props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

const CardFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const IngredientItem = styled.li`
  list-style: none;
  color: #093824;
`;

const Instruction = styled.span`
color: #093824;
text-align: justify;
margin: 0 auto;
max-width: 200px;
`

const CocktailImage = styled.img`
  max-height: 250px;
  width: auto;
  margin-bottom: 16px;
  border-radius: 7px;
`;

const CocktailTitle = styled.h2`
  color: #333333;
  font-size: 24px;
  margin-bottom: 12px;
`;
