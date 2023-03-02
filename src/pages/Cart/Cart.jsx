import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  const totalPrice = cart.reduce(
    (acc, value) => (acc += value.price * value.quantity),
    0
  );

  const totalArticle = cart.reduce((acc, value) => (acc += value.quantity), 0);

  return (
    <main className={styles.cart}>
      <h1 className={styles.title}>Votre pannier</h1>
      <ul className={styles.cartlist}>
        {cart.map((article) => (
          <CartItem key={article._id} article={article} />
        ))}
      </ul>
      <p className={styles.total}>
        Total ({totalArticle} articles): {totalPrice}€
      </p>
      <div>
        <button className={styles.btn}>Commander</button>
      </div>
    </main>
  );
}

export default Cart;
