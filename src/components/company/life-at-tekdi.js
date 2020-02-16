import React, { Fragment } from 'react';
import PreviewCompatibleImage from '../common/preview-compatible-image';
import './life-at-tekdi.scss';

const LifeAtTekdiInfo = ({
  LifeAtTekdiItems
}) => {

  return(
    <div className="life-at-tekdi">
      <div className="container">
          <h2 className="com-heading text-black">Life @ Tekdi</h2>
          <div className="row">
            {LifeAtTekdiItems.map(item => (
              <Fragment>
              <div className="pics float-left">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: item.img,
                    alt: `img`,
                  }}
                />
              </div>
              </Fragment>
            ))}
          </div>
      </div>
    </div>
  );
}

const LifeAtTekdi = ({
  lifeAtTekdiImg
}) => {
  return(
    <LifeAtTekdiInfo 
    LifeAtTekdiItems={lifeAtTekdiImg}
    />
  );
}
export default LifeAtTekdi;