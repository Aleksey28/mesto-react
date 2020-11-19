import PopupWithForm from './PopupWithForm';
import { propsPopupWithConfirmForm } from '../utils/constants.js';

export default function AddPlacePopup({ isOpen, isLoading, onClose, onAddPlace }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <PopupWithForm
      title={propsPopupWithConfirmForm.title}
      name={propsPopupWithConfirmForm.name}
      submitStates={propsPopupWithConfirmForm.submitStates}
      isOpen={isOpen}
      isLoad={isLoading}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}
