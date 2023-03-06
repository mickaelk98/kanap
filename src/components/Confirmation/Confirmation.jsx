import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import styles from "./Confirmation.module.scss";

function Confirmation() {
  const { orderInformation, creditCardInformation } = useContext(OrderContext);
  const cart = JSON.parse(localStorage.getItem("cart"));

  // const { name, location } = orderInformation;
  // const { cardHolderName, cardNumber, cardDate } = creditCardInformation;

  const totalPrice = cart.reduce(
    (acc, value) => (acc += value.price * value.quantity),
    0
  );

  const totalArticle = cart.reduce((acc, value) => (acc += value.quantity), 0);

  return (
    <div className={styles.confirmationpage}>
      <h2>Confirmation</h2>
      <div className={styles.container}>
        <div className={styles.delivery}>
          <h3>Adresse de livraison</h3>
          <ul>
            <li>Nom: john doe</li>
            <li>Adresse: 25 rue des test 75000 paris</li>
          </ul>
        </div>
        <div className={styles.creditcard}>
          <h3>Carte de paiement</h3>
          <ul>
            <li>Nom: john doe</li>
            <li>Number: 1222251116848499464949</li>
            <li>Expiration: 12/24</li>
          </ul>
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
          <button>Annuler</button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
