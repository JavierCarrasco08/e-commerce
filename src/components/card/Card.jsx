import { useContext } from "react";
import { AddContext } from "../../context/addCar";
import "./card.scss";

export default function Card({ name, prices, src, id }) {
  const Add = useContext(AddContext);
  return (
    <div className="card">
      <figure className="card__figure">
        <img src={src} alt={name} className="card__img" />
      </figure>
      <h2 className="card__name">{name}</h2>
      <div className="card__content">
        <p className="card__price">
          {prices} <span>$</span>
        </p>
        <button
          className="card__button"
          onPointerDown={() => {
            Add(id);
          }}>
          Buy
        </button>
      </div>
    </div>
  );
}
