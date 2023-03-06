import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";
import styles from "./Confirmation.module.scss";

function Confirmation() {
  const navigate = useNavigate();
  const { orderInformation, creditCardInformation } = useContext(OrderContext);
  const cart = JSON.parse(localStorage.getItem("cart"));

  const { name, location } = orderInformation;
  const {
    cardHolderName,
    cardNumber,
    cardDate: { month, year },
  } = creditCardInformation;

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
                <img src={cartItem.imageUrl} alt={cartItem.atTxt} />
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
          <button>Commander</button>
          <button onClick={() => navigate("/")}>Annuler</button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
