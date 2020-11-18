import React from 'react';
import importedLogo from '../images/header-logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import { propsPopupWithAddForm, propsPopupWithConfirmForm } from '../utils/constants.js';
import { apiObject } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    apiObject
      .getUserData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(console.log);
  }, []);

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

  const handleUpdateUser = (data) => {
    apiObject
      .setUserData(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(console.log);
  };

  const handleUpdateAvatar = (data) => {
    apiObject
      .setAvatar(data)
      .then((data) => {
        setCurrentUser(data);
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
            minLength="2"
            maxLength="30"
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

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

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
    </CurrentUserContext.Provider>
  );
}

export default App;
