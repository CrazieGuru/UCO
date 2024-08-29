import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import Cart from "./Pages/Cartpage/Cart";
import Products from "./Pages/Productpage/Products";
import Checkout from "./Pages/Checkoutpage/Checkout";
import Success from "./Components/Success/Success";
import Orders from "./Pages/Orders/Orders";
import ErrorPage from "./Components/Error/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Products />} />
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="*" element={<ErrorPage/>}/>

          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
