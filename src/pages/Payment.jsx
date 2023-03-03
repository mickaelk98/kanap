import CreditCard from "../components/CreditCard";
import OrderForm from "../components/OrderForm/OrderForm";

function Payement() {
  const compoenentList = [<OrderForm />, <CreditCard />];
  return (
    <div>
      <div>{compoenentList[0]}</div>
    </div>
  );
}

export default Payement;
