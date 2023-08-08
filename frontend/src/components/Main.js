import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const cardsElements = props.cards.map((card) => (
    <Card
      onCardClick={props.onCardClick}
      onCardLike={props.onCardLike}
      onCardDelete={props.onCardDelete}
      card={card}
      key={card._id}
    />
  ));
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img
            src={currentUser.avatar}
            alt="Фото профиля"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="button profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="button profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">{cardsElements}</section>
    </main>
  );
}
export default Main;
