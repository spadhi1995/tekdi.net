import React from "react";
import FeaturesList from './features-list';

const FeaturesInfo = props => {
  return (
    <div className="container">
      <div className="com-cover">
        <div className="text-center col-md-6 offset-md-3 mb-5">
          <h2 className="com-heading text-black">
            Features
          </h2>
          <p>{props.featuresubheading}</p>
        </div>
        <FeaturesList />
    </div>
  </div>
  ); 
}

export default FeaturesInfo;