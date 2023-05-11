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
    <aside className="menu category">
      {hidden ? null : (
        <Button src={category} onActive={() => setExpand(!expand)} />
      )}

      <ul
        className={`menu__list ${expand ? "translate" : null}`}
        onClick={() => setExpand(false)}>
        <li className="menu__item">
          <Link className="menu__a" to="/">
            Home
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__a" to="/category/mobile">
            Mobiles
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__a" to="/category/laptop">
            Laptops
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__a" to="/category/tablet">
            Tablets
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__a" to="/category/console">
            Consoles
          </Link>
        </li>
      </ul>
    </aside>
  );
}
