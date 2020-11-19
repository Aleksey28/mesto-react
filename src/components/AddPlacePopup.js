import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { propsPopupWithAddForm } from '../utils/constants.js';

export default function AddPlacePopup({ isOpen, isLoading, onClose, onAddPlace }) {
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
      isLoad={isLoading}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input popup__input_type_name"
        name="name"
        id="add-name-input"
        value={name}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        onChange={handleChangeName}
      />
      <span className="popup__error" id="add-name-input-error"></span>
      <input
        type="url"
        className="popup__input popup__input_type_link"
        name="link"
        id="link-input-add"
        value={link}
        placeholder="Ссылка на картинку"
        required
        onChange={handleChangeLink}
      />
      <span className="popup__error" id="link-input-add-error"></span>
    </PopupWithForm>
  );
}
