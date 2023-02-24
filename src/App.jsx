import Header from "./components/Header/Header";
import bannerLogo from "/images/banniere.png";
import ProductsList from "./components/ProductsList/ProductList";

function App() {
  return (
    <div className="homepage">
      <Header />
      <main>
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
        <ProductsList />
      </main>
    </div>
  );
}

export default App;
