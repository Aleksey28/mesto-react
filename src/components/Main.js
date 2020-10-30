import "../index.css";

export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__btn profile__btn_action_edit-avatar">
          <img src="#" alt="Аватар." className="profile__avatar" />
          <span className="profile__avatar-overlay"></span>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Name</h1>
          <button
            className="profile__btn profile__btn_action_edit"
            type="button"
          ></button>
          <p className="profile__about">About</p>
        </div>
        <button
          className="profile__btn profile__btn_action_add"
          type="button"
        ></button>
      </section>
      <section>
        <ul className="cards"></ul>
      </section>
    </main>
  );
}
