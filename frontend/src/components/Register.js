import { Link } from "react-router-dom";
import React from "react";

function Register({ onReg }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onReg(password, email);
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          placeholder="Email"
          type="email"
          required
          onChange={handleEmailChange}
          value={email}
        />
        <input
          className="auth__input"
          placeholder="Пароль"
          type="password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
        <button className="auth__save-button button" type="submit">
          Зарегистрироваться
        </button>
        <Link className="auth__link button" to="/sign-in">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;
