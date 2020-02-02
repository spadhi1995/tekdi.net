import React from 'react';
import Content from '../common/content';
import './services-info.scss';


const ServicesInfo = ({
  content,
  contentComponent,
  productdevheading,
  sassheading,
  webdevheading,
  mobilityheading,
  uiheading
}) => {

  const PostContent = contentComponent || Content

  return(
    <div className="industries-info mb-4">
      <div className="container">
        <h3 className="font-weight-normal text-black">
          {productdevheading}
        </h3>
        <h3 className="font-weight-normal text-black">
          {sassheading}
        </h3>
        <h3 className="font-weight-normal text-black">
          {webdevheading}
        </h3>   
        <h3 className="font-weight-normal text-black">
          {mobilityheading}
        </h3>
        <h3 className="font-weight-normal text-black">
          {uiheading}
        </h3>  
      
        <div className="main-content row">
          <div className="col-xs-12 content">
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServicesInfo;