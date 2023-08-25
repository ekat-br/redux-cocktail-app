import { useGetAllProductsQuery } from "../features/api/apiSlice";

const ProductList = () => {
  const { data } = useGetAllProductsQuery();
  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {data.drinks.map((product) => (
          <li key={product.idDrink}>
            <span>{product.strDrink}</span>
            <br></br>
            <img src={product.strDrinkThumb} alt="cocktail-image"></img>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
