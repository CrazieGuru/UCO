import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import './Zones.css'


const Zones = ({data}) => {
  

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
        {Object.values(data).map((item,index)=>(
        <div className="zone" key={index}>
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

export default Zones;
