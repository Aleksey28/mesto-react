export const cardListSelector = '.cards';
export const selectorPicturePopup = '.popup_type_show';
export const selectorPopupWithAddForm = '.popup_type_add';
export const selectorPopupWithEditForm = '.popup_type_edit';
export const selectorPopupWithEditAvatarForm = '.popup_type_edit-avatar';
export const selectorPopupWithConfirm = '.popup_type_confirm';

export const propsPicturePopup = '.popup_type_show';

export const propsPopupWithAddForm = {
  title: 'Новое место',
  name: 'add',
};
export const propsPopupWithEditForm = {
  title: 'Редактировать профиль',
  name: 'edit',
};
export const propsPopupWithEditAvatarForm = {
  title: 'Обновить аватар',
  name: 'edit-avatar',
};
export const propsPopupWithConfirmForm = {
  title: 'Вы уверены?',
  name: 'confirm',
};

export const propsPopupWithConfirm = '.popup_type_confirm';

export const inputSelectorsAddForm = {
  name: '.popup__input_type_name',
  link: '.popup__input_type_link',
};

export const inputSelectorsEditForm = {
  name: '.popup__input_type_name',
  about: '.popup__input_type_about',
};

export const inputSelectorsEditAvatarForm = {
  link: '.popup__input_type_link',
};

export const selectorsUserInfo = {
  selectorName: '.profile__name',
  selectorAbout: '.profile__about',
  selectorAvatar: '.profile__avatar',
};

export const validationSettings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn_action_submit',
  inactiveButtonClass: 'popup__btn__disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

export const apiSettings = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
  headers: {
    authorization: 'fcd9a632-5cad-436c-b58e-4c80d498006a',
    'Content-Type': 'application/json',
  },
};
