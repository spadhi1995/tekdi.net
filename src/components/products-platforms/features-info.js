import React from "react";
import FeaturesList from './features-list';

const FeaturesInfo = ({
  featuresubheading,
  features
}) => {
  return (
    <div className="container">
      <div className="com-cover">
        <div className="text-center col-md-6 offset-md-3 mb-5">
          <h2 className="com-heading text-black">
            Features
          </h2>
          <p>{featuresubheading}</p>
        </div>
        <FeaturesList 
          featureItems={features}
        />
    </div>
  </div>
  ); 
}

export default FeaturesInfo;