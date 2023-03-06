import Confirmation from "../components/Confirmation/Confirmation";
import CreditCard from "../components/CreditCard/CreditCard";
import OrderForm from "../components/OrderForm/OrderForm";
import OrderProvider from "../components/OrderProvider";

function Payement() {
  const compoenentList = [<OrderForm />, <CreditCard />, <Confirmation />];

  return (
    <OrderProvider>
      <div>
        <div>{compoenentList[2]}</div>
      </div>
    </OrderProvider>
  );
}

export default Payement;
