import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart() {
  const navigate = useNavigate();
  const localCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(localCart);
  let totalPrice;
  let totalArticle;

  if (cart) {
    totalPrice = cart.reduce(
      (acc, value) => (acc += value.price * value.quantity),
      0
    );

    totalArticle = cart.reduce((acc, value) => (acc += value.quantity), 0);
  }

  function deleteArticle(article) {
    if (cart.length > 1) {
      const result = cart.filter((cartItem) => cartItem._id !== article._id);
      setCart(result);
      localStorage.setItem("cart", JSON.stringify(result));
    } else {
      localStorage.clear();
      setCart([]);
    }
  }

  return (
    <main className={styles.cart}>
      <h1 className={styles.title}>Votre pannier</h1>
      <ul className={styles.cartlist}>
        {cart.length > 0 ? (
          cart.map((article) => (
            <CartItem
              key={article._id}
              article={article}
              deleteArticle={deleteArticle}
            />
          ))
        ) : (
          <p className={styles.text}>Votre pannier est vide</p>
        )}
      </ul>
      {cart.length > 0 && (
        <>
          <p className={styles.total}>
            Total ({totalArticle} articles): {totalPrice}€
          </p>
          <div>
            <button onClick={() => navigate("/payment")} className={styles.btn}>
              Commander
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
