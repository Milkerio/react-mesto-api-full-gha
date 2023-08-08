import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: name,
      link: link,
    });
  }
  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      name="add"
      title="Новое место"
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Добавить"
    >
      <input
        type="text"
        className="popup__input"
        name="name"
        id="caption"
        autoComplete="off"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        onChange={(evt) => setName(evt.target.value)}
      />
      <span className="popup__error" id="caption-error"></span>
      <input
        type="url"
        className="popup__input"
        name="link"
        id="pictureURL"
        autoComplete="off"
        placeholder="Ссылка на картинку"
        required
        onChange={(evt) => setLink(evt.target.value)}
      />
      <span className="popup__error" id="pictureURL-error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
