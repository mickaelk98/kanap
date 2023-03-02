import styles from "./Cart.module.scss";

function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <main className={styles.cart}>
      <h1 className={styles.title}>Votre pannier</h1>
      <ul className={styles.cartlist}>
        {cart.map((article) => (
          <li className={styles.item}>
            <div className={styles.imageblock}>
              <img src={article.imageUrl} alt="kanapé" />
            </div>
            <h2 className={styles.itemtitle}>{article.name}</h2>
            <p className={styles.itemcolor}>{article.color}</p>
            <p className={styles.itemprice}> {article.price} €</p>
            <p className={styles.itemquantity}>Quantité: {article.quantity} </p>
            <button>Supprimer</button>
          </li>
        ))}
      </ul>
      <p className={styles.total}>Total (2 articles): 1161€</p>
      <button className={styles.btn}>Commander</button>
    </main>
  );
}

export default Cart;
