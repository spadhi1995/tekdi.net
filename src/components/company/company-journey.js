import React from 'react';
import PreviewCompatibleImage from '../common/preview-compatible-image';
import './company-journey.scss';

const JourneyInfo = ({
  JourneyItems
}) => {

  return(
    <div className="company-journey mb-4">
      <div className="container">
          <h2 className="com-heading text-black text-center">The Journey</h2>
            {JourneyItems.map(item => (
            <div className="item" key={item.id}>
              <div className="item-inner">
                <h4 className="text-black font-weight-bold">{item.title}</h4>
                <p class="content">
                  {item.description}
                </p>
                <div className="icon">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: item.icon,
                      alt: `icon ${`{item.title}`}`,
                    }}
                  />
                </div>
              </div>
            </div>
            ))}
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