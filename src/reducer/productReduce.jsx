import { getAll } from "../helper/getAll";

export function productReduce(state, action) {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        { ...getAll().find((product) => product.id === action.id), num: 1 },
      ];
    }
    case "increment": {
      let mapArr = state.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            num: action.op(product.num),
          };
        } else {
          return product;
        }
      });
      let filterArr = mapArr.filter((product) => product.num !== 0);

      return filterArr;
    }
  }
}
