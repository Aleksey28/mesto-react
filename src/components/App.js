import { useEffect, useState } from 'react';
import importedLogo from '../images/header-logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { propsPopupWithConfirmForm } from '../utils/constants.js';
import { apiObject } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  //Создаем стейты
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  //Загружаем данные карточек один раз при сборке
  useEffect(() => {
    apiObject
      .getCardList()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Загружаем данные пользователя
  useEffect(() => {
    apiObject
      .getUserData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(console.log);
  }, []);

  //Обработчик нажатия на аватарку
  const handleEditAvatarClick = () => {
    //Открываем попап редактирования аватара
    setIsEditAvatarPopupOpen(true);
  };

  //Обработчик нажатия на кнопку редактирования профиля
  const handleEditProfileClick = () => {
    //Открываем попап редактирования профиля
    setIsEditProfilePopupOpen(true);
  };

  //Обработчик нажатия на кнопку добавления новой карточки
  const handleAddPlaceClick = () => {
    //Открываем попап добавления новой карточки
    setIsAddPlacePopupOpen(true);
  };

  //Обработчик нажатия на карточку
  const handleCardClick = (card) => {
    //Открываем попап картинки
    setIsImagePopupOpen(true);
    //Устанавливаем выбранную карточку как текущую, для отображения в попапе
    setSelectedCard(card);
  };

  //Обработчик закрытия всех попапов
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmOpen(false);
    setIsImagePopupOpen(false);
  };

  //Обработчик обновления данных пользователя
  const handleUpdateUser = (data) => {
    //Отправляем новые данные на сервер
    apiObject
      .setUserData(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(console.log);
  };

  //Обработчик обновления аватара
  const handleUpdateAvatar = (data) => {
    //Отправляем новые данные
    apiObject
      .setAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(console.log);
  };

  //функция обработчик установки/снятия лайка
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

  //функция обработчик удаления карточки
  const handleCardDelete = (card) => {
    //Отправляем запрос на удаление карточки
    apiObject
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((item) => item._id !== card._id);
        setCards(newCards);
      })
      .catch(console.log);
  };

  //Обработчик добавления новой карточки
  const handleAddPlace = (card) => {
    //Отправляем запрос на добавление карточки
    apiObject
      .addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(console.log);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header logo={importedLogo} />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />

        <PopupWithForm
          title={propsPopupWithConfirmForm.title}
          name={propsPopupWithConfirmForm.name}
          submitStates={propsPopupWithConfirmForm.submitStates}
          isOpen={isConfirmOpen}
          isLoad={false}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
