import React from 'react';
import PreviewCompatibleImage from '../common/preview-compatible-image';
import './core-purpose.scss';


const CorePurpose = ({
  corePurposeHeading,
  corePurposeDesc,
  corePurposeImg
}) => {

  return(
    <div className="core-purpose section3">
      <div className="container">
        <div className="row">
        <div className="col-lg-6 col-sm-4 col-xs-12 left-section">
          <div className="content text-black">
            <h3 class="com-heading">{corePurposeHeading}</h3>
            <p>{corePurposeDesc}</p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-8 col-xs-12">
          <PreviewCompatibleImage
            imageInfo={{
              image: corePurposeImg,
              alt: `core purpose image`,
            }}
          />
        </div>
        </div>
      </div>
    </div>
  );
}
export default CorePurpose;