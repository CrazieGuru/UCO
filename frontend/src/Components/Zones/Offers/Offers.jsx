import React from "react";
import "./Offers.css";

const Offers = () => {
  const zones_data = {
    offer_zone: {
      title_name: "Supersaver",
      title_sub_name: "Up to 50% Off",
      items: 10,
    },
    fruit_veg_zone: {
      title_name: "Vegitables & Fruits",
      title_sub_name: "",
      items: 5,
    },
    juice_zone: {
      title_name: "Cold Drinks & Juices",
      title_sub_name: "Up to 30% Off",
      items: 5,
    },
  };

  const to_list = (num) =>{
    const list = []
    for (let index = 0; index < num; index++) {
      list.push(index)
    }
    return list
  }
  return (
    <>
      <div className="zones">
        {Object.values(zones_data).map((item,index)=>(
        <div className="zone">
          <div className="title">
            <p className="title-name">
              {item.title_name} <span>{item.title_sub_name}</span>
            </p>
            <p className="view-all">
              View All <i className="fa fa-angle-right"></i>
            </p>
          </div>
          <div className="items">
            {
              to_list(item.items).map(()=>(
                <ItemCard/>
              ))
            }
          </div>
        </div>
        ))}
      </div>
    </>
  );
};
import "./Offers.css";
import ItemCard from "../../ItemCard/ItemCard";

export default Offers;
