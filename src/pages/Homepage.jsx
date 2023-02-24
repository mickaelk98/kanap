import ProductsList from "../components/ProductsList/ProductList";
import bannerLogo from "/images/banniere.png";

function Homepage() {
  return (
    <>
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
    </>
  );
}

export default Homepage;
