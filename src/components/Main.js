import React from 'react';
import Card from './Card';

import { apiObject } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    apiObject
      .getCardList()
      .then((cardListData) => {
        setCards(
          cardListData.map((element) => {
            return <Card card={element} onCardClick={onCardClick} key={element._id} />;
          }),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__btn profile__btn_action_edit-avatar" onClick={onEditAvatar}>
          <img src={currentUser.avatar} alt="Аватар." className="profile__avatar" />
          <span className="profile__avatar-overlay"></span>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__btn profile__btn_action_edit" type="button" onClick={onEditProfile}></button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button className="profile__btn profile__btn_action_add" type="button" onClick={onAddPlace}></button>
      </section>
      <section>
        <ul className="cards">{cards}</ul>
      </section>
    </main>
  );
}
