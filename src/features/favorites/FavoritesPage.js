import { useSelector } from "react-redux";
import { selectFavoritesIds } from "./favoritesSlice";
import { useGetAllCocktailsQuery } from "../api/apiSlice";
import { styled } from "styled-components";
import CocktailCard from "../cocktails/CocktailCard";

const FavoritesPage = () => {
  const favoriteCocktailIds = useSelector(selectFavoritesIds);
  const { data, isLoading, isError } = useGetAllCocktailsQuery();


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const favoriteCocktails = data.drinks.filter((cocktail) =>
  favoriteCocktailIds.includes(cocktail.idDrink)
  );

  return (
    <Container>
      <Title>Your Favorite Cocktails</Title>
      <Container>
        {favoriteCocktails.map((cocktail) => 
          <CocktailCard cocktail={cocktail} key={cocktail.id}/>
        )}
      </Container>
    </Container>
  );
};

export default FavoritesPage;

const Container = styled.div`
text-align: center;
margin-top: 50px;
`
const Title = styled.h2`
color: #fff;
`