import React from 'react'
import './Banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banners from '../../assets/images/images.js';
import { Container } from "react-bootstrap";
import './Banner.css'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import BannerItem from './BannerItem.jsx';

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
    <div className="banner">
      <Container>
        <Slider {...settings}>
          {banners.map((item, ind) => {
            return (
                <img src={item} alt="" />
            );
          })}
        </Slider>
      </Container>
    </div>
    </div>
  </>
  )
}

export default Banner
