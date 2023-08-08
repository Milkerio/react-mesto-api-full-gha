import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Header({ loggedIn, signout, email }) {
  const locate = useLocation();
  const location = locate.pathname === "/sign-up" ? "/sign-in" : "/sign-up";
  const linkName = locate.pathname === "/sign-up" ? "Войти" : "Регистрация";

  return (
    <header className="header">
      <img src={logo} alt="Логотип Mesto" className="header__logo" />
      {loggedIn ? (
        <div className="header__container">
          <p className="header__email">{email}</p>
          <Link className="header__link button" onClick={signout}>
            Выйти
          </Link>
        </div>
      ) : (
        <Link className="header__link button" to={location}>
          {linkName}
        </Link>
      )}
    </header>
  );
}
export default Header;
