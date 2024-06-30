import React from 'react'
import './BannerItem.css'

const BannerItem = ({key,title,desc,img}) => {
  return (
    <div className='banner-item' key={key}>
        <div className="item-img">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default BannerItem
