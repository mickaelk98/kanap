import Header from "./components/Header/Header";
import bannerLogo from "./assets/images/banniere.png";

function App() {
  return (
    <div>
      <Header />
      {/* <div style={{ background: `url(${bannerLogo}) center/cover` }}></div> */}

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
    </div>
  );
}

export default App;
