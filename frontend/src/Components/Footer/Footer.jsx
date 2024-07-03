import React from "react";
import "./Footer.css";

const Footer = () => {
  const categories = [
    "Fruites",
    "Vegetable",
    "Dairy",
    "Eggs & Meat",
    "Bath & Body",
    "Cold Drinks",
    "Snacks",
  ];
  const services = [
    "About Us",
    "Term & Cond.",
    "FAQ",
    "Privacy Policy",
    "Cancellation Policy",
    "Return Policy"
  ];
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="contact section">
            <>
            <div className="logo">
              <p className="brand-name">
                UCO <span>Deliveries</span>
              </p>
            </div>
            <div className="contact-options">
              <div className="contact-option">
                <i className="fa-brands fa-whatsapp"></i>
                <p>9876 543 210</p>
              </div>
              <div className="contact-option">
                <i className="fa-solid fa-phone"></i>
                <p>1800 000 123</p>
              </div>
              
            </div>
            <div className="social-media">
              <i className="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
            </>
            
          </div>
          <div className="popular-links section">
            <h1>Categories</h1>
            <div className="link-items">
              {categories.map((val, ind) => (
                <div className="link-item" key={ind}>
                  <p>{val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=" services popular-links section">
            <h1>Services</h1>
            <div className="link-items">
              {services.map((val, ind) => (
                <div className="link-item" key={ind}>
                  <p>{val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mobile-app section">
            <h1>Download App</h1>
            <div className="mobile-app-box">
              <div className="android app">
                <i className="fa-brands fa-apple"></i>
                <div className="app-title">
                  <h6>Download on the</h6>
                  <h4>App Store</h4>
                </div>
              </div>
              <div className="ios app">
                <i class="fa-brands fa-google-play"></i>
                <div className="app-title">
                  <h6>Get IT ON</h6>
                  <h4>Goolge Play</h4>
                </div>
              </div>
              <div className="coming-soon">
                <p>Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
        <p className="copy-rights">
          <i class="fa-regular fa-copyright"></i> 2024 All rights reserved. UCO
          Deliveries
        </p>
      </div>
    </>
  );
};

export default Footer;
