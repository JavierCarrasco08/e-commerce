import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContainerCard from "./components/container-card/ContainerCard.jsx";
import Root from "./routes/Root.jsx";
import Category from "./routes/Category.jsx";
import Item from "./routes/Item.jsx";
import data from "./data.js";
import { getAll } from "./helper/getAll.js";
import "./index.scss";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <ContainerCard />,
      },
      {
        path: "category/:categoryId",
        element: <Category />,
        loader: ({ params }) => {
          return data[params.categoryId];
        },
      },
      {
        path: "/item/:productId",
        element: <Item />,
        loader: ({ params }) => {
          return getAll().find((product) => product.id === params.productId);
        },
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
