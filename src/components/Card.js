import '../index.css';

export default function Card({ card, userID, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      {userID === card.owner._id ? <button className="card__btn card__btn_action_trush" type="button"></button> : ''}
      <img src={card.link} alt={card.name} className="card__image" onClick={handleClick} />
      <div className="card__footer">
        <h3 className="card__caption">{card.name}</h3>
        <div className="like card__like">
          <button
            className={`like__btn ${card.likes.some((item) => item._id === userID) ? 'like__btn_active' : ''}`}
            type="button"
          ></button>
          <p className="like__count" title={card.likes.reduce((res, item) => (res += `${item.name}\n`), '')}>
            {card.likes.length}
          </p>
        </div>
      </div>
    </li>
  );
}
