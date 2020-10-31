import React from 'react';
import '../index.css';

import { apiObject } from '../utils/api.js';

export default function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('#');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([apiObject.getUserData(), apiObject.getCardList()])
      .then(([{ name, about, avatar }, cardListData]) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);

        setCards(
          cardListData.map((element) => {
            return (
              <li class="card" key={element._id}>
                <button class="card__btn card__btn_action_trush" type="button"></button>
                <img src={element.link} alt={element.name} class="card__image" />
                <div class="card__footer">
                  <h3 class="card__caption">{element.name}</h3>
                  <div class="like card__like">
                    <button class="like__btn" type="button"></button>
                    <p class="like__count" title={element.likes.reduce((res, item) => (res += `${item.name}\n`), '')}>
                      {element.likes.length}
                    </p>
                  </div>
                </div>
              </li>
            );
          }),
        );
      })
      .catch((error) => {
        // const elementError = document.createElement('p');
        // elementError.textContent = error;
        // elementError.classList.add('error');
        // document.body.append(elementError);
        console.log('Error');
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
