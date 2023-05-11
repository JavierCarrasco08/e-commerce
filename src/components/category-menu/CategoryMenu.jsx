import { useState } from "react";
import { useHidden } from "../../hooks/useHidden";
import { NavLink } from "react-router-dom";
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
          <NavLink
            className={`menu__a ${({ isActive }) => {
              return isActive ? "active" : "";
            }}`}
            to="/">
            Home
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            className={`menu__a ${({ isPending, isActive }) => {
              return isPending ? "pending" : isActive ? "active" : "";
            }}`}
            to="/category/mobile">
            Mobiles
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            className={`menu__a ${({ isPending, isActive }) => {
              return isPending ? "pending" : isActive ? "active" : "";
            }} `}
            to="/category/laptop">
            Laptops
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            className={`menu__a ${({ isPending, isActive }) => {
              return isPending ? "pending" : isActive ? "active" : "";
            }}`}
            to="/category/tablet">
            Tablets
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            className={`menu__a ${({ isPending, isActive }) => {
              return isPending ? "pending" : isActive ? "active" : "";
            }}`}
            to="/category/console">
            Consoles
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
