import { useGetAllProductsQuery } from "../features/api/apiSlice";
import ProductCard from "./ProductCard";
import { styled } from "styled-components";

const ProductList = () => {
  const { data } = useGetAllProductsQuery();
  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ProductListTitle>🌴Time for a Cocktail Party🌴</ProductListTitle>
      <ProductListContainer>
        {data.drinks.map((product) => (
          <ProductCard key={product.idDrink} product={product} />
        ))}
      </ProductListContainer>
    </>
  );
};
export default ProductList;

const ProductListContainer = styled.ul`
  padding: 0;
`;

const ProductListTitle = styled.h2`
  font-size: 24px;
  color: #19d78b;
  margin-bottom: 16px;
  text-align: center;
`;
