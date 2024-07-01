import React from 'react'
import './Banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banners from '../../assets/images/images.js';
import './Banner.css'
import 'react-slideshow-image/dist/styles.css'

const Banner = () => {
    const settings = {
        nav: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

  return (
  <>
  <div className="banner-container">
    <div className="banners">
        <Slider {...settings}>
          {banners.map((item, ind) => {
            return (
                <img src={item} alt="" />
            );
          })}
        </Slider>
    </div>
    </div>
  </>
  )
}

export default Banner
