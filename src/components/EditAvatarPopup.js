import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import { propsPopupWithEditAvatarForm } from '../utils/constants.js';

export default function EditAvatarPopup({ isOpen, isLoading, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateAvatar({
      link: avatarRef.current.value,
    });
  };

  return (
    <PopupWithForm
      title={propsPopupWithEditAvatarForm.title}
      name={propsPopupWithEditAvatarForm.name}
      submitStates={propsPopupWithEditAvatarForm.submitStates}
      isOpen={isOpen}
      isLoad={isLoading}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        type="url"
        className="popup__input popup__input_type_link"
        name="link"
        id="link-input-edit"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error" id="link-input-edit-error"></span>
    </PopupWithForm>
  );
}
