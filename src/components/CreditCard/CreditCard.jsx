import styles from "./CreditCard.module.scss";

function CreditCard() {
  return (
    <div className={styles.creditcardpage}>
      <h2>carte de paiement</h2>
      <form className={styles.form}>
        <div className={styles.name}>
          <label htmlFor="name">Nom</label>
          <input type="text" placeholder="john doe" />
        </div>
        <div className={styles.number}>
          <label htmlFor="number">Numero de la carte</label>
          <input type="number" placeholder="1234 5678 9123 0000" />
        </div>
        <div className={styles.expirationcvc}>
          <div>
            <label htmlFor="expiration">Date d'expiration</label>
            <div className={styles.date}>
              <input className={styles.month} type="number" placeholder="MM" />
              <input className={styles.year} type="number" placeholder="AA" />
            </div>
          </div>
          <div className={styles.cvc}>
            <label htmlFor="cvc">cvc</label>
            <input type="number" placeholder="123" />
          </div>
        </div>
        <div className={styles.btnblock}>
          <button>Envoyer</button>
        </div>
      </form>
    </div>
  );
}

export default CreditCard;
