import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cart from "./pages/Cart/Cart";
import Homepage from "./pages/Homepage";
import Payement from "./pages/Payment/Payment";
import Product from "./pages/Product/Product";
import Confirmation from "./pages/Confirmation/Confirmation";
import HasOrdered from "./components/HasOrdered";

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
