import logo from "@/assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="container">
          <ul>
            <li>
              <img className="footer__image" src={logo} alt="entrprise" />
            </li>
            <li>Adresse: 10 quai de la charente 75019 Paris 19</li>
            <li>Téléphone : 01 23 45 67 89</li>
            <li>Email : kanap@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">© Copyright 2023</div>
      </div>
    </footer>
  );
}

export default Footer;
