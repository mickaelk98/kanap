import { NavLink } from "react-router-dom";
import logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__info">
        <div className="container">
          <ul>
            <li>
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              01 23 45 67 89
            </li>
            <li>
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              kanap@gmail.com
            </li>
            <li>
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              10 quai de la charente 75019 Paris 19
            </li>
          </ul>
        </div>
      </div>
      <div className="header__logo">
        <div className="container">
          <NavLink to="/">
            <img src={logo} alt="entrprise" />
          </NavLink>
          <nav>
            <ul>
              <NavLink end to="/">
                <li>Accueil</li>
              </NavLink>
              <NavLink end to="/cart">
                <li>Pannier</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
