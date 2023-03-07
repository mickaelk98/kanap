import React from "react";
import { NavLink } from "react-router-dom";
import { ProductInterface } from "../../interfaces/ProductInterface";

const ProductItem: React.FC<{ product: ProductInterface }> = ({ product }) => {
  const { _id, imageUrl, altTxt, name, description } = product;
  return (
    <li className="product">
      <NavLink to={`/product/${_id}`} className="product__link">
        <article className="product__container">
          <img className="product__image" src={`${imageUrl}`} alt={altTxt} />
          <h3 className="product__title">{name}</h3>
          <p className="product__description">{description}</p>
        </article>
      </NavLink>
    </li>
  );
};

export default ProductItem;
