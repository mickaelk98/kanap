import { useState } from "react";
import Confirmation from "../components/Confirmation/Confirmation";
import CreditCard from "../components/CreditCard/CreditCard";
import OrderForm from "../components/OrderForm/OrderForm";
import OrderProvider from "../components/OrderProvider";

function Payement() {
  const [step, setStep] = useState(0);
  const compoenentList = [
    <OrderForm step={step} setStep={setStep} />,
    <CreditCard step={step} setStep={setStep} />,
    <Confirmation step={step} setStep={setStep} />,
  ];

  return (
    <OrderProvider>
      <div>
        <div>{compoenentList[step]}</div>
      </div>
    </OrderProvider>
  );
}

export default Payement;
