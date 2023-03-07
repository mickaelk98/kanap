import { ReactNode, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import { CreditCardInformationInterface } from "../interfaces/CreditCardInformationInterface";
import { OrderInformationInterface } from "../interfaces/OrderInformationInterface";

const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderInformation, setOrderInformation] = useState(
    {} as OrderInformationInterface
  );
  const [creditCardInformation, setCreditCardInformation] = useState(
    {} as CreditCardInformationInterface
  );

  function addOrderInformation(data: OrderInformationInterface) {
    setOrderInformation(data);
  }

  function addCreditCardInformation(data: CreditCardInformationInterface) {
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
};

export default OrderProvider;
