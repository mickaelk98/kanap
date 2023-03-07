import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "./App";

const Homepage = lazy(() => import("./pages/Homepage"));
const Payement = lazy(() => import("./pages/Payment/Payment"));
const Product = lazy(() => import("./pages/Product/Product"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Confirmation = lazy(() => import("./pages/Confirmation/Confirmation"));
const HasOrdered = lazy(() => import("./components/HasOrdered"));

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
      {
        path: "/payment",
        element: <Payement />,
      },
      {
        path: "/confirmation",
        element: (
          <HasOrdered>
            <Confirmation />
          </HasOrdered>
        ),
      },
    ],
  },
]);
