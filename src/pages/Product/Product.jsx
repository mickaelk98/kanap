import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "@/context/ProductsContext";
import styles from "./Product.module.scss";

function Product() {
  const { getOneProduct } = useContext(ProductsContext);
  const params = useParams();
  const id = params.id;
  const product = getOneProduct(id);
  const { imageUrl, altTxt, name, description, price, colors } = product;

  return (
    <main className={styles.product}>
      <article>
        <div className={styles.imageblock}>
          <img src={imageUrl} alt={altTxt} />
        </div>
        <div className={styles.nameblock}>
          <h1>{name}</h1>
          <p>prix: {price}€</p>
        </div>
        <div className={styles.descriptionblock}>
          <h2>Description : </h2>
          <p>{description}</p>
        </div>
        <div className={styles.selectcolorblock}>
          <label htmlFor="color-selector">Choissisez une couleur</label>
          <select name="color-selector" id="colors">
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectquantityblock}>
          <label htmlFor="itemQuantity">Nombre d'article(s) (1-100) :</label>
          <input type="number" min="1" max="100" />
        </div>
        <div className={styles.btnblock}>
          <button>Ajouter au panier</button>
        </div>
      </article>
    </main>
  );
}

export default Product;
