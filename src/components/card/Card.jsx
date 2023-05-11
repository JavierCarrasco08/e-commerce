import { Link } from "react-router-dom";
import Prices from "../prices-add/Prices";
import "./card.scss";

export default function Card({ name, prices, src, id }) {
  return (
    <div className="card">
      <figure className="card__figure">
        <img src={src} alt={name} className="card__img" />
      </figure>
      <h2 className="card__name">{name}</h2>
      <Link to={`/item/${id}`} className="card__link">
        See item
      </Link>
      <Prices id={id} prices={prices} />
    </div>
  );
}
