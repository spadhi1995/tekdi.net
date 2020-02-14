import React from 'react';
import './company-journey.scss';

const JourneyInfo = ({
  JourneyItems
}) => {

  return(
    <div className="company-journey">
      <div className="container">
        <div className="text-center">
          <h2 className="com-heading text-black">The Journey</h2>
          <div className="">
            {JourneyItems.map(item => (
            <div className="item" key={item.id}>
              <h4 className="text-black">{item.title}</h4>
              <p>
                {item.description}
              </p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CompanyJourney = ({
  journeyInfo
}) => {
  return(
    <JourneyInfo 
      JourneyItems={journeyInfo}
    />
  );
}
export default CompanyJourney;