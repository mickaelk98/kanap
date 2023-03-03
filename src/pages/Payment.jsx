import Confirmation from "../components/Confirmation/Confirmation";
import CreditCard from "../components/CreditCard/CreditCard";
import OrderForm from "../components/OrderForm/OrderForm";

function Payement() {
  const compoenentList = [<OrderForm />, <CreditCard />, <Confirmation />];
  return (
    <div>
      <div>{compoenentList[2]}</div>
    </div>
  );
}

export default Payement;
