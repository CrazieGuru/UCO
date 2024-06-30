import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Homepage/Home';
import Cart from './Pages/Cartpage/Cart';
import Products from './Pages/Productpage/Products';
import Checkout from './Pages/Checkoutpage/Checkout';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product' element={<Products/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
