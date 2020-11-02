import '../index.css';

export default function PopupWithForm({ title, name, isOpen, isLoad, onClose, submitStates, children }) {
  // debugger;
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} name={name}>
      <form className="popup__container popup__container_type_form" name="container" noValidate>
        <button className="popup__btn popup__btn_action_close" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button className="popup__btn popup__btn_action_submit" type="submit">
          {!isLoad ? submitStates.static : submitStates.loading}
        </button>
      </form>
    </div>
  );
}
