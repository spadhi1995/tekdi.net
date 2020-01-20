import React from "react"
const Banner = props => {
    return(
        <div className="banner">
        <div className="container">
          <div className="banner-text">
              <p className="text-white font-weight-normal">{props.bannerSubTitle}</p>
              <h1 className="text-white">{props.bannerTitle}</h1>
          </div>
        </div>
      </div>
    );
}
export default Banner;