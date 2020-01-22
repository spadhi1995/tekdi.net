import React from "react"
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import "./slideshow.css";


class Slideshow extends React.Component {
    render () {
        const params = {
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              bullets: true,
            },
            grabCursor: true,
            loop:true
          }
      
        return (
            <div className="slideshow">
                <div className="container">
                    <Swiper {...params}> 
                        
                        <div className="carousel-items">
                            <div className="row">
                            <h3 className="col-sm-7 carousel-desc">Digital Solution and Data Analytics for an Efficient Framework and Better Customer Experience</h3>
                            <div className="col-sm-5 mb-none">
                                <img src={require('./images/slideshow.png')} alt="slideshow" className="img-responsive"/>
                            </div>
                            </div>
                        </div>
                    
                        <div className="container carousel-items">
                            <div className="row">
                            <h3 className="col-sm-7 carousel-desc">Digital Solution and Data Analytics for an Efficient Framework and Better Customer Experience</h3>
                            <div className="col-sm-5 mb-none">
                                <img src={require('./images/slideshow.png')} alt="slideshow" className="img-responsive"/>
                            </div>
                            </div>
                        </div>
                        
                        <div className="container carousel-items">
                            <div className="row">
                            <h3 className="col-sm-7 carousel-desc">Digital Solution and Data Analytics for an Efficient Framework and Better Customer Experience</h3>
                            <div className="col-sm-5 mb-none">
                                <img src={require('./images/slideshow.png')} alt="slideshow" className="img-responsive"/>
                            </div>
                            </div>
                        </div>
                        
                    </Swiper>
                </div>
            </div>
        );
    }
}
export default Slideshow;