import { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { propsPopupWithEditForm } from '../utils/constants.js';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleChangeDescription = (evt) => {
    setDescription(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      title={propsPopupWithEditForm.title}
      name={propsPopupWithEditForm.name}
      submitStates={propsPopupWithEditForm.submitStates}
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
        value={description}
        placeholder="Описание профиля"
        minLength="2"
        maxLength="200"
        required
        onChange={handleChangeDescription}
      />
      <span className="popup__error" id="about-input-error"></span>
    </PopupWithForm>
  );
}
