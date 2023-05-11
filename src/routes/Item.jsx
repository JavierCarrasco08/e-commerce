import { useLoaderData } from "react-router-dom";
import Prices from "../components/prices-add/Prices";

export default function Item() {
  let { name, price, src, characteristics, id } = useLoaderData();
  characteristics = Object.entries(characteristics);

  return (
    <main className="outlet">
      <div className="outlet__container">
        <div className="item">
          <figure className="item__product">
            <img src={src} alt="" className="item__img" />
            <figcaption className="item__fig">{name}</figcaption>
          </figure>
          <div className="item__content">
            <ul className="item__ul">
              {characteristics.map((characteristic) => (
                <li className="item__li" key={characteristic.at(0)}>
                  <strong>{characteristic.at(0)}</strong>:{" "}
                  {characteristic.at(1)}
                </li>
              ))}
            </ul>
            <Prices id={id} prices={price} />
          </div>
        </div>
      </div>
    </main>
  );
}
