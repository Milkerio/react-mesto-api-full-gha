import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import React from "react";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner === currentUser._id;
  const isLiked = props.card.likes.some((card) => card === currentUser._id);
  const cardLikeButtonClassName = (`button elements__like-button ${
    isLiked && "elements__like-button_active"
  }`);
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }
  return (
    <article className="elements__card">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="elements__image"
        onClick={handleClick}
      />
      {isOwn && (
        <button
          type="button"
          className="button elements__delete-button"
          onClick={handleDeleteClick}
        ></button>
      )}
      <div className="elements__group">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-group">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className="elements__like-counter">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </article>
  );
}
export default Card;
