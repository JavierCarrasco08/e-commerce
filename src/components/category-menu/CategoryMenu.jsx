import { useState } from "react";
import { useHidden } from "../../hooks/useHidden";
import { Link } from "react-router-dom";
import Button from "../button-active/Button";
import category from "../../assets/svg/category.svg";
import "./category.scss";

export default function CategoryMenu() {
  const [expand, setExpand] = useState(false);
  const hidden = useHidden(1000);
  return (
    <aside className="menu">
      {hidden ? null : (
        <Button src={category} onActive={() => setExpand(!expand)} />
      )}

      <ul className={`menu__list ${expand ? "translate" : null}`}>
        <li className="menu__item">
          <Link className="menu__a">Mobiles</Link>
        </li>
        <li className="menu__item">
          <Link className="menu__a">Laptops</Link>
        </li>
        <li className="menu__item">
          <Link className="menu__a">Tablets</Link>
        </li>
        <li className="menu__item">
          <Link className="menu__a">Consoles</Link>
        </li>
      </ul>
    </aside>
  );
}
