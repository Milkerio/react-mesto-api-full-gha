import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const inputAvatar = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputAvatar.current.value,
    });
  }
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      name="avatar"
      title="Обновить аватар"
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        className="popup__input"
        ref={inputAvatar}
        type="url"
        name="avatar"
        placeholder="Ссылка на аватар"
        id="avatar"
        required
      />
      <span className="popup__error" id="avatar-error"></span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
