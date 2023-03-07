import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";
import { CartItemInterface } from "../../interfaces/CartItemInterfac";
import styles from "./Summary.module.scss";

const Summary: React.FC = () => {
  const navigate = useNavigate();
  const { orderInformation, creditCardInformation } = useContext(OrderContext);
  const cart: CartItemInterface[] = JSON.parse(
    localStorage.getItem("cart") || ""
  );

  const { name, location } = orderInformation;
  const {
    cardHolderName,
    cardNumber,
    cardDate: { month, year },
  } = creditCardInformation;

  if (orderInformation && creditCardInformation) {
    localStorage.setItem("orderInformation", JSON.stringify(orderInformation));
    localStorage.setItem(
      "creditCardInformation",
      JSON.stringify(creditCardInformation)
    );
  }

  const totalPrice = cart.reduce(
    (acc, value) => (acc += value.price * value.quantity),
    0
  );

  const totalArticle = cart.reduce((acc, value) => (acc += value.quantity), 0);

  return (
    <div className={styles.confirmationpage}>
      <div className={styles.container}>
        <div className={styles.delivery}>
          <h3>Adresse de livraison</h3>
          {orderInformation && (
            <ul>
              <li>Nom: {name}</li>
              <li>Adresse: {location}</li>
            </ul>
          )}
        </div>
        <div className={styles.creditcard}>
          <h3>Carte de paiement</h3>
          {creditCardInformation && (
            <ul>
              <li>Nom: {cardHolderName}</li>
              <li>Number: {cardNumber}</li>
              <li>
                Expiration: {month}/{year}
              </li>
            </ul>
          )}
        </div>
        <div className={styles.summary}>
          <h3>Recapitulatif</h3>
          <ul>
            {cart.map((cartItem) => (
              <li key={cartItem._id}>
                <img src={cartItem.imageUrl} alt={cartItem.altTxt} />
                <div>
                  <p>{cartItem.name}</p>
                  <p>{cartItem.color}</p>
                  <p>{cartItem.price} €</p>
                  <p>x{cartItem.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <p>
            Total ({totalArticle} articles): {totalPrice}€
          </p>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => navigate("/confirmation")}>Commander</button>
          <button onClick={() => navigate("/")}>Annuler</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
