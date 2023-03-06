import { useState } from "react";
import { OrderContext } from "../context/OrderContext";

function OrderProvider({ children }) {
  const [orderInformation, setOrderInformation] = useState();

  function addOrderInformation(data) {
    setOrderInformation(data);
  }

  return (
    <div>
      <OrderContext.Provider value={{ orderInformation, addOrderInformation }}>
        {children}
      </OrderContext.Provider>
    </div>
  );
}

export default OrderProvider;
