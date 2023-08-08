import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      name="edit"
      title="Редактировать профиль"
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        type="text"
        className="popup__input"
        name="name"
        id="userName"
        autoComplete="off"
        minLength="2"
        maxLength="40"
        required
        placeholder="Имя"
        onChange={(evt) => setName(evt.target.value)}
        value={name ?? ""}
      />
      <span className="popup__error" id="userName-error"></span>
      <input
        type="text"
        className="popup__input"
        name="about"
        id="userDescription"
        autoComplete="off"
        minLength="2"
        maxLength="200"
        required
        placeholder="О себе"
        onChange={(evt) => setDescription(evt.target.value)}
        value={description ?? ""}
      />
      <span className="popup__error" id="userDescription-error"></span>
    </PopupWithForm>
  );
}
export { EditProfilePopup };
