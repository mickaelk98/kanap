import styles from "./Confirmation.module.scss";

function Confirmation() {
  return (
    <div className={styles.confirmation}>
      <p>Commade validée votre numero de commande est :</p>
      <div>{crypto.randomUUID()}</div>
    </div>
  );
}

export default Confirmation;
