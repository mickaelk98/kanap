import React, { useState } from "react";
import CreditCard from "../../components/CreditCard/CreditCard";
import OrderForm from "../../components/OrderForm/OrderForm";
import OrderProvider from "../../components/OrderProvider";
import StepsIndex from "../../components/StepsIndex/StepsIndex";
import Summary from "../../components/Summary/Summary";
import styles from "./Payment.module.scss";

const Payement: React.FC = () => {
  const [step, setStep] = useState(0);
  const compoenentList = [
    <OrderForm step={step} setStep={setStep} />,
    <CreditCard step={step} setStep={setStep} />,
    <Summary />,
  ];

  return (
    <OrderProvider>
      <div className={styles.payment}>
        <div className={styles.container}>
          <StepsIndex step={step} />
          <div className={styles.steps}>{compoenentList[step]}</div>
        </div>
      </div>
    </OrderProvider>
  );
};

export default Payement;
