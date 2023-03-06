import { useState } from "react";
import { OrderContext } from "../context/OrderContext";

function OrderProvider({ children }) {
  const [orderInformation, setOrderInformation] = useState();
  const [creditCardInformation, setCreditCardInformation] = useState();

  function addOrderInformation(data) {
    setOrderInformation(data);
  }

  function addCreditCardInformation(data) {
    setCreditCardInformation(data);
  }

  return (
    <div>
      <OrderContext.Provider
        value={{
          orderInformation,
          addOrderInformation,
          creditCardInformation,
          addCreditCardInformation,
        }}
      >
        {children}
      </OrderContext.Provider>
    </div>
  );
}

export default OrderProvider;
