import * as yup from "yup";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./OrderForm.module.scss";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

function OrderForm({ step, setStep }) {
  const { addOrderInformation } = useContext(OrderContext);

  const schema = yup.object({
    name: yup
      .string()
      .required("Ce champ est obligatoire")
      .min(3, "Votre nom est trop court"),
    email: yup
      .string()
      .email("Votre saisie ne correspond pas a une adresse email")
      .required("Ce champ est obligatoire"),
    location: yup
      .string()
      .required("Ce champ est obligatoire")
      .matches(
        "([0-9]*) ?([a-zA-Z,. ]*) ?([0-9]{5}) ?([a-zA-Z]*)",
        "Votre addresse est incorrect (ex: 4 rue victore 75000 paris)"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      location: "",
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  function getOrderInformation(formValue) {
    addOrderInformation(formValue);
    reset();
    setStep(step + 1);
  }

  return (
    <div className={styles.formpage}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(getOrderInformation)}
      >
        <h2>Information de livraison</h2>
        <div>
          <label htmlFor="name">Nom</label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Votre nom"
          />
          {errors?.name && <small>{errors.name.message}</small>}
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="Votre email"
          />
          {errors?.email && <small>{errors.email.message}</small>}
        </div>

        <div>
          <label htmlFor="location">Adresse</label>
          <input
            {...register("location")}
            type="text"
            id="location"
            placeholder="Votre adresse"
          />
          {errors?.location && <small>{errors.location.message}</small>}
        </div>
        <div className={styles.btnblock}>
          <button>Suivant</button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
