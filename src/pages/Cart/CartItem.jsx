import styles from "./CartItem.module.scss";

function CartItem({ article }) {
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
        <button>Supprimer</button>
      </div>
    </li>
  );
}

export default CartItem;
