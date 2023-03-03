import CreditCard from "../components/CreditCard/CreditCard";
import OrderForm from "../components/OrderForm/OrderForm";

function Payement() {
  const compoenentList = [<OrderForm />, <CreditCard />];
  return (
    <div>
      <div>{compoenentList[1]}</div>
    </div>
  );
}

export default Payement;
