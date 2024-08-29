import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const orders = false;
  return (
    <>
      {orders && (
        <div className="order-track">
          <p className="minute-status">Delivery in 10 minutes</p>
          <div className="order-options">
            <div className="order-option">
              <i class="fa fa-location-dot"></i>Delivery to 600012
            </div>
            <div className="order-option">
              <i class="fa fa-truck"></i>
              <Link to={"/orders"}>Trace your order</Link>
            </div>
            <div className="order-option">
              <i class="fa fa-tags"></i>
              <Link to={"/"}>All Offers</Link>
            </div>
          </div>
        </div>
      )}

      <div className="navbar">
        <div className="nav-top">
          <div className="logo">
            <a className="brand-name" href="/">
              UCO <span>Deliveries</span>
            </a>
            <p className="sub-name">Fast and smooth delivery at your home</p>
            <div className="profile-cart-m">
              <a className="profile">
                <i className="fa fa-user"></i>
                <a href=""><p>Login</p></a>
              </a>
              <hr />
              <a href="/cart" className="cart">
                <i className="fa fa-cart-shopping"></i>
                <p>Cart</p>
              </a>
            </div>
          </div>
          <div className="search-bar">
            <i className="fa fa-search"></i>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search essentials, groceries and more..."
            />
          </div>
          <div className="profile-cart">
            <a className="home link">
              <i className="fa fa-home"></i>
              <a href="/"><p>Home</p></a>
            </a>
            <hr />
            <a className="profile link">
              <i className="fa fa-user"></i>
              <a href=""><p>Login</p></a>
            </a>
            <hr />
            <a href="/cart" className="cart link">
              <i className="fa fa-cart-shopping"></i>
              <p>Cart</p>
            </a>
            <hr />
            <a href="/orders" className="cart link">
            <i class="fa fa-clipboard"></i>
              <p>Orders</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
