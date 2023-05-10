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
        value={(id, op) => {
          let ignore = true;
          let getProduct = getAll().find((product) => product.id === id);
          let filterProduct = buyList.find((product) => product.id === id);
          getProduct.num = 1;
          if (!buyList.some((product) => product.id === id)) {
            setBuyList([...buyList, getProduct]);
            ignore = false;
          }
          if (filterProduct) {
            let result = op(filterProduct.num);
            result === 0
              ? setBuyList(
                  buyList.filter((product) => {
                    ignore = false;
                    return product.id !== id;
                  })
                )
              : (ignore = true);
          }
          if (ignore) {
            setBuyList(
              buyList.map((product) => {
                if (product.id === id) {
                  return {
                    ...product,
                    num: op(product.num),
                  };
                } else {
                  return product;
                }
              })
            );
          }
        }}>
        <CategoryMenu />
        <Outlet />
        <BuyingMenu products={buyList} />
      </AddContext.Provider>
    </>
  );
}

export default Root;
