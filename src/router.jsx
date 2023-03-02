import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cart from "./pages/Cart/Cart";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
