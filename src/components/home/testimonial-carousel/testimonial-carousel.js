import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './testimonial-carousel.css';
import PropTypes from 'prop-types'
import {v4} from 'uuid';

const Testimonials = ({ testimonials }) => {
  return(
  <div>
    {testimonials.map(testimonial => (
      <div key={v4()}>
        <div className="container testimonial-carousel">
          <div className="col-md-6 offset-md-3">
            <h2 className="com-heading text-center text-black mb-3">Trusted by Global Brands</h2>
              <OwlCarousel
              className="owl-theme"
              items={1}
              loop={true}
              dots={true}
              >
                  {testimonial.quote}
                  <br/>
                  – {testimonial.author}
              </OwlCarousel>
            </div>
          </div>
        </div>
    ))}
  </div>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

const TestimonialCarousel = () => {
  return (
    <div className="container testimonial-carousel">
      <div className="col-md-6 offset-md-3">
        <h2 className="com-heading text-center text-black mb-3">Trusted by Global Brands</h2>
    
        <OwlCarousel
            className="owl-theme"
            items={1}
            loop={true}
            dots={true}
        >
            <div className="item">
              <div className="tsml-img float-left">
                <img src={require("./images/join-us.jpg")} alt="Join Us" />
              </div>
              <div className="tsml-info float-left">
                <p>We have put more than 20k hours work during 1.5 years to make sure Tekdi is the most unique website ever </p>
                <p className="tsml-author">John Blur, Founder, Co-Blue</p>
              </div>
            </div>
            <div className="item">
              <div className="tsml-img float-left">
                <img src={require("./images/join-us.jpg")} alt="Join Us" />
              </div>
              <div className="tsml-info float-left">
                <p>We have put more than 20k hours work during 1.5 years to make sure Tekdi is the most unique website ever </p>
                <p className="tsml-author">John Blur, Founder, Co-Blue</p>
              </div>
            </div>
            <div className="item">
              <div className="tsml-img float-left">
                <img src={require("./images/join-us.jpg")} alt="Join Us" />
              </div>
              <div className="tsml-info float-left">
                <p>We have put more than 20k hours work during 1.5 years to make sure Tekdi is the most unique website ever </p>
                <p className="tsml-author">John Blur, Founder, Co-Blue</p>
              </div>
            </div>
        </OwlCarousel> 
      </div>
    </div>
  )
}

export default Testimonials;