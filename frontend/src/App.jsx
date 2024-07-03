import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Homepage/Home';
import Cart from './Pages/Cartpage/Cart';
import Products from './Pages/Productpage/Products';
import Checkout from './Pages/Checkoutpage/Checkout';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (<>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product' element={<Products/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
