import '../index.css';

export default function Header({ logo }) {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} alt="Логотип страницы Место." className="header__logo" />
      </a>
    </header>
  );
}
