import { styled } from "styled-components";
export default function ProductCard({ product }) {
  return (
    <CardContainer>
      <ProductTitle>{product.strDrink}</ProductTitle>
      <ProductImage src={product.strDrinkThumb} alt={product.strDrink} />
    </CardContainer>
  );
}

const CardContainer = styled.li`
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  background-color: #d8dbea;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
  max-height: 300px;
`;

const ProductTitle = styled.h2`
  color: #8d86c9;
  font-size: 24px;
  margin-bottom: 16px;
`;
