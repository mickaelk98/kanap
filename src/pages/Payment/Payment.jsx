import { useState } from "react";
import Confirmation from "../../components/Confirmation/Confirmation";
import CreditCard from "../../components/CreditCard/CreditCard";
import OrderForm from "../../components/OrderForm/OrderForm";
import OrderProvider from "../../components/OrderProvider";
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
          <ul className={styles.stepsindex}>
            <li>
              <div
                style={
                  step === 0
                    ? { background: "var(--secondary-color)" }
                    : { background: "var(--primary-color)" }
                }
              >
                1
              </div>
            </li>
            <li>
              <div
                style={
                  step === 1
                    ? { background: "var(--secondary-color)" }
                    : { background: "var(--primary-color)" }
                }
              >
                2
              </div>
            </li>
            <li>
              <div
                style={
                  step === 2
                    ? { background: "var(--secondary-color)" }
                    : { background: "var(--primary-color)" }
                }
              >
                3
              </div>
            </li>
          </ul>
          <div className={styles.steps}>{compoenentList[step]}</div>
        </div>
      </div>
    </OrderProvider>
  );
}

export default Payement;
