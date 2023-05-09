import { useState } from "react";
import "./product.scss";

export default function Product({ name, src, prices }) {
  const [countProduct, setCountProduct] = useState(1);
  return (
    <>
      <li className="product">
        <figure className="product__figure">
          <img src={src} alt={name} className="product__img" />
        </figure>
        <div className="product__container">
          <h2 className="product__name">{name}</h2>
          <p className="product__prices">
            {countProduct * prices} <span>$</span>
          </p>
          <div className="product__buttons">
            <button
              onPointerDown={() => setCountProduct(1 + countProduct)}
              className="product__button">
              +
            </button>
            <p className="product__count">{countProduct}</p>
            <button
              onPointerDown={() => setCountProduct(countProduct - 1)}
              className="product__button">
              -
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
