import React from 'react';
import PreviewCompatibleImage from '../preview-compatible-image';
import './banner.scss';

const Banner = props => {
    return(
        <div className="banner">
          <PreviewCompatibleImage
            imageInfo={{
              image: props.bannerbgimage,
              alt: `banner image ${props.title}`,
            }}
          />
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