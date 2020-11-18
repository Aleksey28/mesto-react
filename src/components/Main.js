import React from 'react';
import Card from './Card';

import { apiObject } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  //Загружаем данные карточек один раз при сборке
  React.useEffect(() => {
    apiObject
      .getCardList()
      .then((data) => {
        const newCards = [];

        data.forEach((item) => {
          newCards.unshift(item);
        });
        setCards(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCardLike = (card) => {
    //Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((item) => item._id === currentUser._id);

    //Отправляем запрос в API и получаем обновленные данные карточки
    apiObject
      .toggleCardLike(card._id, !isLiked)
      .then((newCard) => {
        //формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((item) => (item._id === card._id ? newCard : item));

        //обновляем стейт
        setCards(newCards);
      })
      .catch(console.log);
  };

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
        <ul className="cards">
          {cards.map((item) => {
            return <Card card={item} onCardClick={onCardClick} onCardLike={handleCardLike} key={item._id} />;
          })}
        </ul>
      </section>
    </main>
  );
}
