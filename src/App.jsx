import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AppLayout from "./components/layout/AppLayout";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Product from "./pages/Product";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/productdetail",
          element: <ProductDetail />,
        },
        {
          path: "/productdetail/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
