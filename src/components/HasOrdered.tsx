import { ReactNode, useRef } from "react";
import { Navigate } from "react-router-dom";

const HasOrdered = ({ children }: { children: ReactNode }) => {
  const order = useRef(false);
  const cart = JSON.parse(localStorage.getItem("cart") || "");
  const orderInformation = JSON.parse(
    localStorage.getItem("orderInformation") || ""
  );
  const creditCardInformation = JSON.parse(
    localStorage.getItem("creditCardInformation") || ""
  );

  if (cart && orderInformation && creditCardInformation) {
    order.current = true;
  }

  return <> {order.current ? children : <Navigate to="/" />}</>;
};

export default HasOrdered;
