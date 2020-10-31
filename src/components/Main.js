import '../index.css';

export default function Main() {
  const openPopup = (selectorPopup) => {
    const popup = document.querySelector(selectorPopup);
    popup.classList.add('popup_opened');
  };

  const handleEditAvatarClick = () => {
    openPopup('.popup_type_edit-avatar');
  };
  const handleEditProfileClick = () => {
    openPopup('.popup_type_edit');
  };
  const handleAddPlaceClick = () => {
    openPopup('.popup_type_add');
  };

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__btn profile__btn_action_edit-avatar" onClick={handleEditAvatarClick}>
          <img src="#" alt="Аватар." className="profile__avatar" />
          <span className="profile__avatar-overlay"></span>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Name</h1>
          <button
            className="profile__btn profile__btn_action_edit"
            type="button"
            onClick={handleEditProfileClick}
          ></button>
          <p className="profile__about">About</p>
        </div>
        <button className="profile__btn profile__btn_action_add" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section>
        <ul className="cards"></ul>
      </section>
    </main>
  );
}
