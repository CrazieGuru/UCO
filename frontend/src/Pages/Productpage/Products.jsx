import React from "react";
import "./Products.css";
import product_img from "../../assets/images/item.png";
import Zones from "../../Components/Zones/Zones";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Products = () => {
  const related_data = [
    {
      title_name: "Related Products",
      title_sub_name: "",
      items: 7,
    }
  ]
  return (
    <>
    <Navbar/>
      <div className="product-container">
        <div className="product">
          <div className="product-img">
            <img src={product_img} alt="" />
            <div className="offer-percentage">20% Off</div>
          </div>
          <div className="product-details">
            <p className="product-name">Fresh Tomato 500gm</p>
            <p className="product-category">Vegetables</p>
            <div className="product-amount">
              <p className="actual-amount">Rs. 35.00</p>
              <p className="mrp-amount">
                MRP : Rs. <span>42.00</span>
              </p>
            </div>
            <p className="stock">In Stock</p>
            <div className="rating">
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p className="rating-count">(3.5) 1 Ratings</p>
              <p className="reviews">0 Reviews</p>
            </div>
            <button>Add</button>
            <p className="notes">
              <span>Notes : </span>Organic and locally sourced options may be
              available.
            </p>
          </div>
        </div>
        <div className="product-description">
          <h2>Product Description</h2>
          <p className="description-note">
            Store at room temperature away from direct sunlight. Wash before
            use. Ideal for salads, sandwiches, sauces, and soups.
          </p>
        </div>
        <div className="rr">
          <h2>Rating & Reviews</h2>
          <div className="rate-table">
            <div className="rating-box">
              <p className="rate">3 / 5</p>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p className="rate-title">Based on Ratings</p>
              <div className="rate-bars">
                <div className="rate-bar">
                  <p className="rate-5">
                    5 <i className="fa-solid fa-star"></i>
                  </p>
                  <div className="rate-line"></div>
                  <p className="rate-count">0</p>
                </div>
                <div className="rate-bar">
                  <p className="rate-5">
                    4 <i className="fa-solid fa-star"></i>
                  </p>
                  <div className="rate-line"></div>
                  <p className="rate-count">0</p>
                </div>
                <div className="rate-bar">
                  <p className="rate-5">
                    3 <i className="fa-solid fa-star"></i>
                  </p>
                  <div className="rate-line"></div>
                  <p className="rate-count">1</p>
                </div>
                <div className="rate-bar">
                  <p className="rate-5">
                    2 <i className="fa-solid fa-star"></i>
                  </p>
                  <div className="rate-line"></div>
                  <p className="rate-count">0</p>
                </div>
                <div className="rate-bar">
                  <p className="rate-5">
                    1 <i className="fa-solid fa-star"></i>
                  </p>
                  <div className="rate-line"></div>
                  <p className="rate-count">0</p>
                </div>
              </div>
            </div>
            <div className="review-table">
              <div className="review-box">
                <div className="reviewer-img-container">
                  <div className="reviewer-img">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
                <div className="reviewer-name-comment">
                  <p className="reviewer-name">Crazie guru</p>
                  <p className="reviewer-comment">
                    Absolutely fresh and flavorful tomatoes! They were perfect
                    for my salads and sauces
                  </p>
                </div>
              </div>
              <div className="review-box">
                <div className="reviewer-img-container">
                  <div className="reviewer-img">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
                <div className="reviewer-name-comment">
                  <p className="reviewer-name">Madhu</p>
                  <p className="reviewer-comment">
                    Absolutely fresh and flavorful tomatoes! They were perfect
                    for my salads and sauces
                  </p>
                </div>
              </div>
              <div className="review-box">
                <div className="reviewer-img-container">
                  <div className="reviewer-img">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
                <div className="reviewer-name-comment">
                  <p className="reviewer-name">Karthika</p>
                  <p className="reviewer-comment">
                    Absolutely fresh and flavorful tomatoes! They were perfect
                    for my salads and sauces
                  </p>
                </div>
              </div>
              <div className="review-box">
                <div className="reviewer-img-container">
                  <div className="reviewer-img">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
                <div className="reviewer-name-comment">
                  <p className="reviewer-name">Rishika</p>
                  <p className="reviewer-comment">
                    Absolutely fresh and flavorful tomatoes! They were perfect
                    for my salads and sauces
                  </p>
                </div>
              </div>
              <div className="review-box">
                <div className="reviewer-img-container">
                  <div className="reviewer-img">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
                <div className="reviewer-name-comment">
                  <p className="reviewer-name">Sai Vignesh</p>
                  <p className="reviewer-comment">
                    Absolutely fresh and flavorful tomatoes! They were perfect
                    for my salads and sauces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Zones data={related_data}/>
      </div>
      <Footer/>
    </>
  );
};

export default Products;
