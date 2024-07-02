import React from 'react'
import './Categories.css'
import cat_img from '../../assets/images/item.png'
const Categories = () => {
    const categories = ["Fruites","Vegitable","Dairy","Eggs & Meat","Bath & Body","Cold Drinks","Snacks","Ice","Baby Care","Home Appliance","Electronics"]
  return (
    <>
    <div className="category-zone">
        <div className="categories">
        {categories.map((val,ind)=>(
            <div className="category" key={ind}>
                <div className="category-img">
                    <img src={cat_img} alt="" />
                </div>
                <p className="category-title">{val}</p>
            </div>
        ))}
        </div>
    </div>
    </>
  )
}
import './Categories.css'
export default Categories
