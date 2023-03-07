import { createContext } from "react";
import { ProductInterface } from "../interfaces/ProductInterface";

interface ProductContextInterface {
  products: ProductInterface[];
  getOneProduct: (productId: string) => ProductInterface
}

export const ProductsContext = createContext({} as ProductContextInterface);
