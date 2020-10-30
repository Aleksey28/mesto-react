import "../index.css";

export default function Header(props) {
  return (
    <header className="header">
      <a href="#">
        <img
          src={props.logo}
          alt="Логотип страницы Место."
          className="header__logo"
        />
      </a>
    </header>
  );
}
