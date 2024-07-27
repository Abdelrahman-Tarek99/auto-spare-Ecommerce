import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/userLogin/Login";
import Shop from "./components/pages/Shop";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SingleProduct from "./components/pages/singleProduct/SingleProduct";
import NotFound from "./NotFound";
import { fetchCartData } from "./components/store/products/ProductsActions";

import { Fragment } from "react";
import CheckOutPage from "./components/pages/checkOutPage/CheckOutPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("FETCHING CART DATA");
    dispatch(fetchCartData());
  }, [dispatch]);

  function Layout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }

  const LoginStatus = useSelector((state) => state.auth.isLoggedIn);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route
          path="/"
          element={LoginStatus ? <Navigate to="/home" replace /> : <Login />}
        />
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<SingleProduct />} />
          <Route path="/checkout" element={<CheckOutPage/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Fragment>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
