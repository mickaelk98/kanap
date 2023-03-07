import React from "react";
import { CartItemInterface } from "../../interfaces/CartItemInterfac";
import styles from "./CartItem.module.scss";

interface Props {
  article: CartItemInterface;
  deleteArticle: (article: CartItemInterface) => void;
}

const CartItem: React.FC<Props> = ({ article, deleteArticle }) => {
  function handleClick() {
    deleteArticle(article);
  }

  return (
    <li className={styles.item}>
      <div className={styles.imageblock}>
        <img src={article.imageUrl} alt="kanapé" />
      </div>
      <div>
        <h2 className={styles.itemtitle}>{article.name}</h2>
        <p className={styles.itemcolor}>{article.color}</p>
        <p className={styles.itemprice}> {article.price} €</p>
        <p className={styles.itemquantity}>Quantité: {article.quantity} </p>
        <button onClick={handleClick}>Supprimer</button>
      </div>
    </li>
  );
};

export default CartItem;
