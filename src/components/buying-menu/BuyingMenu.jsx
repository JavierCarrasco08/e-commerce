import { useState } from "react";
import Button from "../button-active/Button";
import card from "./../../assets/svg/buyCar.svg";
import Product from "../product/Product";
import addCar from "./../../assets/svg/addCar.svg";
import "./buyingMenu.scss";

export default function BuyingMenu({ products }) {
  const [modal, setModal] = useState(false);
  return (
    <div className="buy car">
      <Button src={card} onActive={() => setModal(!modal)} />
      <aside className={`buy__menu ${modal && "translateX"}`}>
        <ul className="buy__list">
          {products.length ? (
            products.map((product) => (
              <Product
                key={product.id}
                src={product.src}
                name={product.name}
                prices={product.price}
              />
            ))
          ) : (
            <figure className="buy__figure">
              <img src={addCar} alt="" />
            </figure>
          )}
        </ul>
      </aside>
    </div>
  );
}
