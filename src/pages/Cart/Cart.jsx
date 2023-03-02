import styles from "./Cart.module.scss";

function Cart() {
  return (
    <main className={styles.cart}>
      <h1 className={styles.title}>Votre pannier</h1>
      <ul>
        <li className={styles.item}>
          <div>
            <img src="" alt="" />
          </div>
          <p></p>
          <p></p>
          <p>€</p>
          <p>Quantité: </p>
          <button>Supprimer</button>
        </li>
      </ul>
      <p>total (3 articles): 1161€</p>
      <button>Commander</button>
    </main>
  );
}

export default Cart;
