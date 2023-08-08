function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__card-container">
        <button
          className="button popup__exit-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__card-picture"
          src={props.card.link}
          alt={props.card.name}
        />
        <h2 className="popup__card-text">{props.card.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;
