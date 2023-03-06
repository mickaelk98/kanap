import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import styles from "./Confirmation.module.scss";

function Confirmation() {
  const { orderInformation } = useContext(OrderContext);

  return (
    <div className={styles.confirmationpage}>
      <h2>Confirmation</h2>
      <div>
        <h3>Adresse de livraison</h3>
      </div>
      <div>
        <h3>Carte de paiement</h3>
      </div>
      <div>
        <h3>Recapitulatif</h3>
      </div>
      <button>Commander</button>
    </div>
  );
}

export default Confirmation;
