import React from 'react'
import './Offers.css'

const Offers = () => {
  return (
    <>
    <div className="zone">
      <div className="title">
        <p className='title-name'>Supersaver <span>Up to 50% Off</span></p>
        <p className='view-all'>View All <i className='fa fa-angle-right'></i></p>
      </div>
      <div className="items">
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/> 
        <ItemCard/> 
        <ItemCard/> 
        <ItemCard/> 
        <ItemCard/> 
        <ItemCard/> 
        <ItemCard/>
      </div>
    </div>
    </>
  )
}
import './Offers.css'
import ItemCard from '../../ItemCard/ItemCard'

export default Offers
