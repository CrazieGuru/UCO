import React from "react";
import "./ItemCard.css";
import pro_img from '../../assets/images/item.png'

const ItemCard = () => {
  return (
    <>
      <div className="card">
        <div className="item-img">
          <img src={pro_img} alt="" />
          <p className="offer-label">20%</p>
        </div>
        <p className="item-name">Go Cheese Slices 200g</p>
        <div className="amount-add">
          <div className="amount">
            <p className="a-amount">$120</p>
            <p className="mrp-amount">$140</p>
          </div>
          <button>Add</button>
        </div>
      </div>
    </>
  );
};
import "./ItemCard.css";

export default ItemCard;
