import CreditCard from "../components/CreditCard";
import OrderForm from "../components/OrderForm";

function Payement() {
  const compoenentList = [<CreditCard />, <OrderForm />];
  return (
    <div>
      <p>page de payement</p>
      <div>{compoenentList[1]}</div>
    </div>
  );
}

export default Payement;
