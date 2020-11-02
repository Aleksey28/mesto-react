import React from 'react';
import importedLogo from '../images/header-logo.svg';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {
  propsPopupWithAddForm,
  propsPopupWithEditForm,
  propsPopupWithEditAvatarForm,
  propsPopupWithConfirmForm,
} from '../utils/constants.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleCardClick = (card) => {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  };
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmOpen(false);
    setIsImagePopupOpen(false);
  };

  return (
    <div className="page">
      <Header logo={importedLogo} />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      {/* Popup for open form to add new card */}
      <PopupWithForm
        title={propsPopupWithAddForm.title}
        name={propsPopupWithAddForm.name}
        submitStates={propsPopupWithAddForm.submitStates}
        isOpen={isAddPlacePopupOpen}
        isLoad={false}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__input popup__input_type_name"
          name="name"
          id="add-name-input"
          placeholder="Название"
          minlength="2"
          maxlength="30"
          required
        />
        <span className="popup__error" id="add-name-input-error"></span>
        <input
          type="url"
          className="popup__input popup__input_type_link"
          name="link"
          id="link-input-add"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error" id="link-input-add-error"></span>
      </PopupWithForm>

      {/* Popup for open form to edit profile */}
      <PopupWithForm
        title={propsPopupWithEditForm.title}
        name={propsPopupWithEditForm.name}
        submitStates={propsPopupWithEditForm.submitStates}
        isOpen={isEditProfilePopupOpen}
        isLoad={false}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__input popup__input_type_name"
          name="name"
          id="edit-name-input"
          placeholder="Заголовок профиля"
          minlength="2"
          maxlength="40"
          required
        />
        <span className="popup__error" id="edit-name-input-error"></span>
        <input
          type="text"
          className="popup__input popup__input_type_about"
          name="about"
          id="about-input"
          placeholder="Описание профиля"
          minlength="2"
          maxlength="200"
          required
        />
        <span className="popup__error" id="about-input-error"></span>
      </PopupWithForm>

      {/* Popup for open form to edit avatar */}
      <PopupWithForm
        title={propsPopupWithEditAvatarForm.title}
        name={propsPopupWithEditAvatarForm.name}
        submitStates={propsPopupWithEditAvatarForm.submitStates}
        isOpen={isEditAvatarPopupOpen}
        isLoad={false}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          className="popup__input popup__input_type_link"
          name="link"
          id="link-input-edit"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error" id="link-input-edit-error"></span>
      </PopupWithForm>

      {/* Popup for open form to confirm action */}
      <PopupWithForm
        title={propsPopupWithConfirmForm.title}
        name={propsPopupWithConfirmForm.name}
        submitStates={propsPopupWithConfirmForm.submitStates}
        isOpen={isConfirmOpen}
        isLoad={false}
        onClose={closeAllPopups}
      />

      {/* Popup which shows full image*/}
      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
