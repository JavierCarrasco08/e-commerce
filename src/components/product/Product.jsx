import { useContext } from "react";
import "./product.scss";
import { AddContext } from "../../context/addCar";

export default function Product({ name, src, prices, num, id }) {
  const addContext = useContext(AddContext);
  return (
    <>
      <li className="product">
        <figure className="product__figure">
          <img src={src} alt={name} className="product__img" />
        </figure>
        <div className="product__container">
          <h2 className="product__name">{name}</h2>
          <p className="product__prices">
            {num * prices} <span>$</span>
          </p>
          <div className="product__buttons">
            <button
              onPointerDown={() => addContext(id, (num) => num + 1)}
              className="product__button">
              +
            </button>
            <p className="product__count">{num}</p>
            <button
              onPointerDown={() => addContext(id, (num) => num - 1)}
              className="product__button">
              -
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
