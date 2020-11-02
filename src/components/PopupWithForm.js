import '../index.css';

export default function PopupWithForm({ title, name, isOpen, onClose, children }) {
  // debugger;
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} name={name}>
      <form className="popup__container popup__container_type_form" name="container" novalidate>
        <button className="popup__btn popup__btn_action_close" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button className="popup__btn popup__btn_action_submit" type="submit">
          <span className="popup__btn-label popup__btn-label_type_static popup__btn-label_visible">Сохранить</span>
          <span className="popup__btn-label popup__btn-label_type_doing">Сохранение...</span>
        </button>
      </form>
    </div>
  );
}
