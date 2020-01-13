import React from "react"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slideshow.css"


class Slideshow extends React.Component {
    render () {
        return (
            <Carousel autoPlay={false} showThumbs={false} infiniteLoop emulateTouch showStatus={false} useKeyboardArrows={true} showArrows={false}>
                
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
                    
                    <div className="container carousel-items">
                        <div className="row">
                        <h3 className="col-sm-7 carousel-desc">Digital Solution and Data Analytics for an Efficient Framework and Better Customer Experience</h3>
                        <div className="col-sm-5 mb-none">
                            <img src={require('./images/slideshow.png')} alt="slideshow" className="img-responsive"/>
                        </div>
                        </div>
                    </div>
            </Carousel>
        );
    }
}
export default Slideshow;