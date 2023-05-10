import { productReduce } from "../reducer/productReduce";
import { useReducer } from "react";
import { AddContext } from "./../context/addCar";
import { Outlet } from "react-router-dom";
import BuyingMenu from "./../components/buying-menu/BuyingMenu";
import CategoryMenu from "./../components/category-menu/CategoryMenu";

function Root() {
  const [buyList, dispatch] = useReducer(productReduce, []);
  return (
    <>
      <AddContext.Provider
        value={(id, op) => {
          let type = buyList.find((product) => product.id === id)
            ? "increment"
            : "add";
          dispatch({ type, id, op });
        }}>
        <CategoryMenu />
        <Outlet />
        <BuyingMenu products={buyList} />
      </AddContext.Provider>
    </>
  );
}

export default Root;
