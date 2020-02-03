import React from "react";
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';
import 'swiper/css/swiper.css';
import './features-list.scss';

const FeaturesList = ({ 
  featureItems 
}) => {
  const params = {
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      992: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true
      },
      640: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: true
      },
      320: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true
      }
    }
  }

  return (
    
    <div className="features-list">
      <Swiper {...params}>
      {featureItems.map(item => (
        <div className="" key={item.id}>
          <h4 className="font-weight-bold">{item.title}</h4>
          <p>
            {item.description}
          </p>
        </div>
      ))}
      </Swiper>
    </div>
    
  )  
} 

FeaturesList.propTypes = {
  featureItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default FeaturesList;