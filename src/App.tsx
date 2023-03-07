import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
import { ProductsContext } from "./context/ProductsContext";
import bannerLogo from "./assets/images/banniere.png";
import { products } from "./data/products";
import Loading from "./pages/Loading";

const App: React.FC = () => {
  function getOneProduct(productId: string) {
    const productArr = products.filter((product) => product._id === productId);
    return productArr[0];
  }

  return (
    <div>
      <ProductsContext.Provider value={{ products, getOneProduct }}>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </ProductsContext.Provider>
    </div>
  );
};

export default App;
