import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, cvv, expirationDate } from "card-validator";
import styles from "./CreditCard.module.scss";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

function CreditCard({ step, setStep }) {
  const { addCreditCardInformation } = useContext(OrderContext);

  const schema = yup.object({
    cardHolderName: yup
      .string()
      .required("Ce champ est obligatoire")
      .min(3, "Votre nom est trop court"),
    cardNumber: yup
      .string()
      .required("Ce champ est obligatoire")
      .test(
        "card-number",
        "carte de credit invalid",
        (value) => number(value).isValid
      ),
    cardDate: yup
      .object()
      .required("Ce champ est obligatoire")
      .test(
        "card-month",
        "date d'expiration incorect",
        (value) => expirationDate(value).isValid
      ),
    cardCvv: yup
      .string()
      .required("Ce champ est obligatoire")
      .test("card-cvv", "cvv invalid", (value) => cvv(value).isValid),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function getCardInformation(formValue) {
    addCreditCardInformation(formValue);
    reset();
    setStep(step + 1);
  }

  return (
    <div className={styles.creditcardpage}>
      <form className={styles.form} onSubmit={handleSubmit(getCardInformation)}>
        <h2>carte de paiement</h2>
        <div className={styles.name}>
          <label htmlFor="name">Nom</label>
          <input
            {...register("cardHolderName")}
            type="text"
            placeholder="john doe"
          />
          {errors?.cardHolderName && (
            <small> {errors.cardHolderName.message} </small>
          )}
        </div>
        <div className={styles.number}>
          <label htmlFor="number">Numero de la carte</label>
          <input
            {...register("cardNumber")}
            type="text"
            placeholder="1234 5678 9123 0000"
          />
          {errors?.cardNumber && <small> {errors.cardNumber.message} </small>}
        </div>
        <div className={styles.expirationcvc}>
          <div>
            <label htmlFor="expiration">Date d'expiration</label>
            <div className={styles.date}>
              <input
                {...register("cardDate.month")}
                className={styles.month}
                type="text"
                placeholder="12"
              />
              <input
                {...register("cardDate.year")}
                className={styles.year}
                type="text"
                placeholder="34"
              />
              {errors?.cardDate && (
                <small className={styles.error}>
                  {errors.cardDate.message}{" "}
                </small>
              )}
            </div>
          </div>
          <div className={styles.cvc}>
            <label htmlFor="cvc">cvv</label>
            <input {...register("cardCvv")} type="number" placeholder="123" />
            {errors?.cardCvv && <small> {errors.cardCvv.message} </small>}
          </div>
        </div>
        <div className={styles.btnblock}>
          <button>Suivant</button>
        </div>
      </form>
    </div>
  );
}

export default CreditCard;
