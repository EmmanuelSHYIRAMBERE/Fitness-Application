import { RouterProvider,createBrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Product from "./pages/Product";


function Router6() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Products />,
      errorElement: <Error/>,
      children: [
        {
      path:"products/:productId",
      element: <Product />
    }
      ]
    },
    {
      path:"about",
      element: <About />
    },
    
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default Router6;
