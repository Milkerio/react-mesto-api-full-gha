import successIcon from "../images/yes.svg";
import failureIcon from "../images/no.svg";

function InfoTooltip({ text, icon, onClose, isOpen }) {
  return (
    <div
      className={`popup popup_type_infotooltip ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <div className="popup__icon">
          {icon === "success" && <img src={successIcon} alt="Успешно" />}
          {icon === "unsuccess" && <img src={failureIcon} alt="Ошибка" />}
        </div>
        <h2 className="popup__title popup__title_info">{text}</h2>
        <button
          className="popup__exit-button button"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
