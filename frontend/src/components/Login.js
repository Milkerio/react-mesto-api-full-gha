import React from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setpassword(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(password, email);
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          placeholder="Email"
          type="email"
          required
          onChange={handleEmailChange}
          value={email || ""}
        />
        <input
          className="auth__input"
          placeholder="Пароль"
          type="password"
          required
          onChange={handlePasswordChange}
          value={password || ""}
        />
        <button className="auth__save-button button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
