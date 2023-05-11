import { useContext } from "react";
import { AddContext } from "../../context/addCar";
import "./prices.scss";

export default function Prices({ prices, id }) {
  const Add = useContext(AddContext);
  return (
    <div className="prices">
      <p className="prices__price">
        {prices} <span>$</span>
      </p>
      <button
        className="prices__button"
        onPointerDown={() => {
          Add(id, (num) => num + 1);
        }}>
        Add
      </button>
    </div>
  );
}
