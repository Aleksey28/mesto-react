import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { propsPopupWithAddForm } from '../utils/constants.js';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleChangeLink = (evt) => {
    setLink(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddPlace({
      name,
      link,
    });
  };

  return (
    <PopupWithForm
      title={propsPopupWithAddForm.title}
      name={propsPopupWithAddForm.name}
      submitStates={propsPopupWithAddForm.submitStates}
      isOpen={isOpen}
      isLoad={false}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input popup__input_type_name"
        name="name"
        id="edit-name-input"
        value={name}
        placeholder="Заголовок профиля"
        minLength="2"
        maxLength="40"
        required
        onChange={handleChangeName}
      />
      <span className="popup__error" id="edit-name-input-error"></span>
      <input
        type="text"
        className="popup__input popup__input_type_about"
        name="about"
        id="about-input"
        value={link}
        placeholder="Описание профиля"
        minLength="2"
        maxLength="200"
        required
        onChange={handleChangeLink}
      />
      <span className="popup__error" id="about-input-error"></span>
    </PopupWithForm>
  );
}
