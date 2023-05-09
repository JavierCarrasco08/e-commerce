import { useState } from "react";
import { AddContext } from "./../context/addCar";
import { Outlet } from "react-router-dom";
import BuyingMenu from "./../components/buying-menu/BuyingMenu";
import CategoryMenu from "./../components/category-menu/CategoryMenu";
import { getAll } from "./../helper/getAll";

function Root() {
  const [buyList, setBuyList] = useState([]);
  return (
    <>
      <AddContext.Provider
        value={(id) =>
          setBuyList([
            ...buyList,
            getAll().find((product) => product.id === id),
          ])
        }>
        <CategoryMenu />
        <Outlet />
        <BuyingMenu products={buyList} />
      </AddContext.Provider>
    </>
  );
}

export default Root;
