import React from 'react';
import '../index.css';
import Card from './Card';

import { apiObject } from '../utils/api.js';

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('#');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([apiObject.getUserData(), apiObject.getCardList()])
      .then(([{ name, about, avatar, _id }, cardListData]) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);

        setCards(
          cardListData.map((element) => {
            return <Card card={element} userID={_id} onCardClick={onCardClick} />;
          }),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__btn profile__btn_action_edit-avatar" onClick={onEditAvatar}>
          <img src={userAvatar} alt="Аватар." className="profile__avatar" />
          <span className="profile__avatar-overlay"></span>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__btn profile__btn_action_edit" type="button" onClick={onEditProfile}></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__btn profile__btn_action_add" type="button" onClick={onAddPlace}></button>
      </section>
      <section>
        <ul className="cards">{cards}</ul>
      </section>
    </main>
  );
}
