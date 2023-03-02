import { useContext, useRef } from "react";
import { json, useParams } from "react-router-dom";
import { ProductsContext } from "@/context/ProductsContext";
import styles from "./Product.module.scss";

function Product() {
  const { getOneProduct } = useContext(ProductsContext);
  const params = useParams();
  const id = params.id;
  const product = getOneProduct(id);
  const { imageUrl, altTxt, name, description, price, colors } = product;
  const productColor = useRef("");
  const productQuantity = useRef(1);

  // get product color
  function handleChangeColor(e) {
    productColor.current = e.target.value;
  }

  // get product quantity
  function handleChangeQuantity(e) {
    productQuantity.current = e.target.value;
  }

  function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const article = {
      _id: id,
      color: productColor.current,
      quantity: Math.floor(productQuantity.current),
    };
    let articleAlreadyInCart = false;

    // crée un pannier et ajoute le nouveaux produit
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([article]));
    } else {
      // cumule les quantités si le produit est deja dans le panier
      for (let i = 0; i < cart.length; i++) {
        if (cart[i]._id === article._id && cart[i].color === article.color) {
          articleAlreadyInCart = true;
          cart[i].quantity += article.quantity;
          localStorage.setItem("cart", JSON.stringify(cart));
          cart = JSON.parse(localStorage.getItem("cart"));
        }
      }
      // ajout le produit dans le pannier si il n'y est pas
      if (!articleAlreadyInCart) {
        cart.push(article);
        localStorage.setItem("cart", JSON.stringify(cart));
        cart = JSON.parse(localStorage.getItem("cart"));
      }
    }
  }

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
          <select
            onChange={handleChangeColor}
            name="color-selector"
            id="colors"
          >
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectquantityblock}>
          <label htmlFor="itemQuantity">Nombre d'article(s) (1-100) :</label>
          <input
            type="number"
            min="1"
            onChange={handleChangeQuantity}
            max="100"
          />
        </div>
        <div className={styles.btnblock}>
          <button onClick={addToCart}>Ajouter au panier</button>
        </div>
      </article>
    </main>
  );
}

export default Product;
