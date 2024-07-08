import React from "react";
import "./Cart.css";
import i_img from "../../assets/images/item.png";

const Cart = () => {
  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-item">
            <div className="cart-item-image-container">
              <img src={i_img} alt="" />
            </div>
            <p className="cart-item-name">Fresh Tomato 500g</p>
            <div className="cart-item-qty">
              <p>32.00</p>
              <div className="qty-func">
                <i className="fa-solid fa-minus"></i>
                <p className="qty">2</p>
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <p className="cart-item-amount">Rs. 64.00</p>
          </div>
          <div className="cart-item">
            <div className="cart-item-image-container">
              <img src={i_img} alt="" />
            </div>
            <p className="cart-item-name">
              Fresh Tomato 500g hghdghsgdhsgdhsdhsh
            </p>
            <div className="cart-item-qty">
              <p>32.00</p>
              <div className="qty-func">
                <i className="fa-solid fa-minus"></i>
                <p className="qty">2</p>
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <p className="cart-item-amount">Rs. 64.00</p>
          </div>
          <div className="cart-item">
            <div className="cart-item-image-container">
              <img src={i_img} alt="" />
            </div>
            <p className="cart-item-name">
              Fresh Tomato 500g hghdghsgdhsgdhsdhsh
            </p>
            <div className="cart-item-qty">
              <p>32.00</p>
              <div className="qty-func">
                <i className="fa-solid fa-minus"></i>
                <p className="qty">2</p>
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <p className="cart-item-amount">Rs. 64.00</p>
          </div>
        </div>
        <div className="cart-amount-container">
          <h2 className="bill-title">Bill Summary</h2>
          <div>
            <div className="bill-details">
              <div className="item-total row">
                <div className="item-total-name">
                  <i className="fa-solid fa-bag-shopping"></i>
                  <p>Item total</p>
                </div>
                <p className="item-amount">$70.00</p>
              </div>
              <div className="gst-total row">
                <div className="gst-total-name">
                  <i class="fa-solid fa-building-columns"></i>
                  <p>GST and restaurent charges</p>
                </div>
                <p className="gst-amount">$10.40</p>
              </div>
              <div className="delivery-total row">
                <div className="delivery-total-name">
                  <i class="fa-solid fa-motorcycle"></i>
                  <p>Delivery partner fee for 4 km</p>
                </div>
                <p className="delivery-amount">$49.00</p>
              </div>
              <div className="discount-total row">
                <div className="discount-total-name">
                  <i class="fa-solid fa-tag"></i>
                  <p>Discount</p>
                </div>
                <p className="discount-amount">- $49.00</p>
              </div>
            </div>
          </div>
          <div className="coupon">
              <div className="coupon-input">
                <input type="coupon-code" name="coupon-code" id="coupon-code" placeholder="Apply coupon Code"/>
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>
              <p className="coupon-amount">Coupon Applied $49.00 Off</p>
          </div>
          <div className="continue-proceed">
            <a href="/" className="btn" name="continue-shop" id="continue-shop">Continue Shopping</a>
            <a className="btn" name="procced" id="proceed">Procced with $80.40</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
