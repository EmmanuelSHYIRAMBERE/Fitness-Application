import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Navbar from "./scenes/navbar";
import Benefits from "./scenes/Benefits";
import Footer from "./scenes/footer/Footer";
import Home from "./scenes/Home";


const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

const routes = [
  <Route path="/"  element={<Layout/>}>
    <Route key= "home" index element={<Home/>}/>
    <Route key="benefits" path="/benefits" element={<Benefits/>} />,
  </Route>,
];

const router = createBrowserRouter(createRoutesFromChildren(routes));
function App() {
  return <RouterProvider router={router} />;
}

export default App;