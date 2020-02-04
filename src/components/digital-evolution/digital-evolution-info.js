import React from 'react';
import PreviewCompatibleImage from '../common/preview-compatible-image';
import CaseStudiesList from '../common/case-studies/case-studies-list';
import Content from '../common/content';
import './digital-evolution-info.scss';


const DigitalEvolutionInfo = ({
  title,
  content,
  contentComponent,
  img,
  mainpitch,
  caseStudyTag
}) => {

  const PostContent = contentComponent || Content

  return(
    <div className="digital-evolution-info">
      <div className="container">
        <div className="row section1">
          <div className="col-lg-8 col-md-7 mb-5">
            <div className="introtext row">
              <div className="col-lg-6 col-md-5 mb-3">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: img,
                    alt: `image of ${title}`,
                  }}
                />
              </div>
              <div className="col-lg-6 col-md-7 content">
                <h4 className="font-weight-bold text-black">
                  {mainpitch.title}
                </h4>
                <p>
                  {mainpitch.description}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-5 col-lg-4 col-md-5">
            <CaseStudiesList caseStudyTag={caseStudyTag} />
          </div>
        </div>          
      </div>
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 content">
              <PostContent content={content} />
            </div>
            <div className="col-lg-6 col-md-5">
              <img src={require('./images/digital-evolution.jpg')} alt="digital-evolution" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DigitalEvolutionInfo;