import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ProductsContext } from "./context/ProductsContext";
import bannerLogo from "/images/banniere.png";
import { products } from "./data/products";

function App() {
  function getOneProduct(productId) {
    const productArr = products.filter((product) => product._id === productId);
    return productArr[0];
  }

  return (
    <div>
      <ProductsContext.Provider value={{ products, getOneProduct }}>
        <Header />
        <img
          src={bannerLogo}
          alt="banniere"
          style={{
            height: "550px",
            width: "100%",
            marginTop: "10px",
            objectFit: "cover",
          }}
        />
        <Outlet />
        <Footer />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
