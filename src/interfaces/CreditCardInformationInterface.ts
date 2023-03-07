export interface CreditCardInformationInterface {
  cardHolderName: string;
  cardNumber: string;
  cardDate: {month: string, year: string};
  cardCvv: string;
}