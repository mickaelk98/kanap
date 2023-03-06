import { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";

function HasOrdered({ children }) {
  const order = useRef(false);
  const cart = JSON.parse(localStorage.getItem("cart"));
  const { orderInformation, creditCardInformation } = useContext(OrderContext);

  if (cart && orderInformation && creditCardInformation) {
    order.current = true;
  }

  return <> {order.current ? children : <Navigate to="/" />}</>;
}

export default HasOrdered;
