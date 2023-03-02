import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <main className={styles.cart}>
      <h1 className={styles.title}>Votre pannier</h1>
      <ul className={styles.cartlist}>
        {cart.map((article) => (
          <CartItem key={article._id} article={article} />
        ))}
      </ul>
      <p className={styles.total}>Total (2 articles): 1161€</p>
      <div>
        <button className={styles.btn}>Commander</button>
      </div>
    </main>
  );
}

export default Cart;
