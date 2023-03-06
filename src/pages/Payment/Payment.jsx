import { useState } from "react";
import Confirmation from "../../components/Confirmation/Confirmation";
import CreditCard from "../../components/CreditCard/CreditCard";
import OrderForm from "../../components/OrderForm/OrderForm";
import OrderProvider from "../../components/OrderProvider";
import StepsIndex from "../../components/StepsIndex/StepsIndex";
import styles from "./Payment.module.scss";

function Payement() {
  const [step, setStep] = useState(0);
  const compoenentList = [
    <OrderForm step={step} setStep={setStep} />,
    <CreditCard step={step} setStep={setStep} />,
    <Confirmation step={step} setStep={setStep} />,
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
}

export default Payement;
