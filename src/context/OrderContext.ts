import { createContext } from "react";
import { OrderInformationInterface } from "../interfaces/OrderInformationInterface";
import { CreditCardInformationInterface } from '../interfaces/CreditCardInformationInterface' 

interface OrderContextInterface {
  orderInformation: OrderInformationInterface;
  creditCardInformation: CreditCardInformationInterface;
  addOrderInformation: (data: OrderInformationInterface) => void
  addCreditCardInformation: (data: CreditCardInformationInterface) => void
}

export const OrderContext = createContext({} as OrderContextInterface);
