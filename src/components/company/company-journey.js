import React from 'react';
import './company-journey.scss';

const JourneyInfo = ({
  JourneyItems
}) => {

  return(
    <div className="project-info">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 offset-lg-2 col-md-10 offset-md-1">
            {JourneyItems.map(item => (
            <div className="item float-left" key={item.id}>
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
    <div className="company-journey">
      <div className="container">
        <JourneyInfo 
          JourneyItems={journeyInfo}
        />
      </div>
    </div>
  );
}
export default CompanyJourney;