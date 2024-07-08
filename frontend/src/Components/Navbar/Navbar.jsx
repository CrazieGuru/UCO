import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const orders = true;
  const categories = [
    "Fruits & Vegitables",
    "Dairy & Breakfast",
    "Egg,Meat & fish",
    "Bath & Body",
    "Cold drinks & Juice",
    "Snacks & Munchies",
    "Icy Delights",
  ];
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
              <Link to={"/trace"}>Trace your order</Link>
            </div>
            <div className="order-option">
              <i class="fa fa-tags"></i>
              <Link to={"/offers"}>All Offers</Link>
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
              <div className="profile">
                <i className="fa fa-user"></i>
                <a href=""><p>Login</p></a>
              </div>
              <hr />
              <div className="cart">
                <i className="fa fa-cart-shopping"></i>
                <a href="/cart"><p>Cart</p></a>
              </div>
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
            <div className="profile">
              <i className="fa fa-user"></i>
              <a href=""><p>Login</p></a>
            </div>
            <hr />
            <div className="cart">
              <i className="fa fa-cart-shopping"></i>
              <a href="/cart"><p>Cart</p></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
