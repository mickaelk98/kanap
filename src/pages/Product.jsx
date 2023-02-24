import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

function Product() {
  const products = useContext(ProductsContext);

  console.log(products);
  return <h1>page produit</h1>;
}

export default Product;
