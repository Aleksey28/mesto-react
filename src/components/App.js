import React from 'react';
import importedLogo from '../images/header-logo.svg';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { propsPopupWithAddForm, propsPopupWithEditForm, propsPopupWithEditAvatarForm } from '../utils/constants.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  return (
    <div className="page">
      <Header logo={importedLogo} />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        title={propsPopupWithAddForm.title}
        name={propsPopupWithAddForm.name}
        isOpen={isAddPlacePopupOpen}
      />
      <PopupWithForm
        title={propsPopupWithEditForm.title}
        name={propsPopupWithEditForm.name}
        isOpen={isEditProfilePopupOpen}
      />
      <PopupWithForm
        title={propsPopupWithEditAvatarForm.title}
        name={propsPopupWithEditAvatarForm.name}
        isOpen={isEditAvatarPopupOpen}
      />

      {/* <div className="popup popup_type_edit-avatar">
        <form className="popup__container popup__container_type_form" name="container" novalidate>
          <button className="popup__btn popup__btn_action_close" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <input
            type="url"
            className="popup__input popup__input_type_link"
            name="link"
            id="link-input-edit"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error" id="link-input-edit-error"></span>
          <button className="popup__btn popup__btn_action_submit" type="submit">
            <span className="popup__btn-label popup__btn-label_type_static popup__btn-label_visible">Сохранить</span>
            <span className="popup__btn-label popup__btn-label_type_doing">Сохранение...</span>
          </button>
        </form>
      </div>

      <div className="popup popup_type_edit">
        <form className="popup__container popup__container_type_form" name="container" novalidate>
          <button className="popup__btn popup__btn_action_close" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
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
          <button className="popup__btn popup__btn_action_submit" type="submit">
            <span className="popup__btn-label popup__btn-label_type_static popup__btn-label_visible">Сохранить</span>
            <span className="popup__btn-label popup__btn-label_type_doing">Сохранение...</span>
          </button>
        </form>
      </div>

      <div className="popup popup_type_add">
        <form className="popup__container popup__container_type_form" name="container" novalidate>
          <button className="popup__btn popup__btn_action_close" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
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
          <button className="popup__btn popup__btn_action_submit" type="submit">
            <span className="popup__btn-label popup__btn-label_type_static popup__btn-label_visible">Создать</span>
            <span className="popup__btn-label popup__btn-label_type_doing">Создание...</span>
          </button>
        </form>
      </div> */}

      {/* <div className="popup popup_type_confirm">
        <form className="popup__container popup__container_type_form" name="container" novalidate>
          <button className="popup__btn popup__btn_action_close" type="button"></button>
          <div className="popup__group-title">
            <img src="#" alt="Аватар." className="popup__avatar" />
            <h2 className="popup__title">Ты уверен?</h2>
            <img src="./images/img-confirm.svg" alt="Поле диалога." className="popup__dialog" />
          </div>
          <button className="popup__btn popup__btn_action_submit" type="submit">
            <span className="popup__btn-label popup__btn-label_type_static popup__btn-label_visible">Да</span>
            <span className="popup__btn-label popup__btn-label_type_doing">Удаление...</span>
          </button>
        </form>
      </div>

      <div className="popup popup_type_show">
        <div className="popup__container popup__container_type_show">
          <button className="popup__btn popup__btn_action_close" type="button"></button>
          <img src="#" alt="" className="popup__image" />
          <h3 className="popup__caption">Подпись</h3>
        </div>
      </div>

      <template id="card-template">
        <li className="card">
          <button className="card__btn card__btn_action_trush" type="button"></button>
          <img src="#" alt="" className="card__image" />
          <div className="card__footer">
            <h3 className="card__caption"></h3>
            <div className="like card__like">
              <button className="like__btn" type="button"></button>
              <p className="like__count" title="ntcn">
                0
              </p>
            </div>
          </div>
        </li>
      </template> */}
    </div>
  );
}

export default App;
