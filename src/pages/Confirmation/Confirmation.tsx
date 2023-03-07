import React from "react";
import styles from "./Confirmation.module.scss";

const Confirmation: React.FC = () => {
  localStorage.clear();
  return (
    <div className={styles.confirmation}>
      <p>Commade validée votre numero de commande est :</p>
      <div>{crypto.randomUUID()}</div>
    </div>
  );
};

export default Confirmation;
