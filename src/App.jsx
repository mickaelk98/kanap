import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ProductsContext } from "./context/ProductsContext";
import { products } from "./data/products";

function App() {
  return (
    <div>
      <ProductsContext.Provider value={products}>
        <Header />
        <Outlet />
        <Footer />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
