import ProductItem from "../ProductItem/ProductItem";
import { products } from "@/data/products";

function ProductsList() {
  return (
    <div className="products-list">
      <div className="container">
        <h1>Nos produits</h1>
        <h2>Une gamme d'articles exclusifs</h2>
        <ul>
          {products &&
            products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductsList;
