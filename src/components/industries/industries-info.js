import React from 'react';
import CaseStudiesList from '../common/case-studies/case-studies-list';
import Content from '../common/content';
import './industries-info.scss';


const IndustriesInfo = ({
  content,
  contentComponent,
  subheading,
  caseStudyTag
}) => {

  const PostContent = contentComponent || Content
  return(
    <div className="industries-info mb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <div className="introtext">
                <p className="font-weight-normal text-black">
                  {subheading}
                </p>
            </div>
          </div>
          <div className="mb-5 col-lg-4 col-md-5">
            <CaseStudiesList caseStudyTag = {caseStudyTag} />
          </div>
        </div>          
      
        <div className="main-content row">
          <div className="col-lg-8 col-md-7">
            <div className="row">
              <div className="col-lg-6 col-md-5">
                <img src={require('./images/industry.jpg')} alt="industry" />
              </div>
              <div className="col-lg-6 col-md-7 content">
                <PostContent content={content} />
              </div>
            </div>
          </div>
          <div className="mb-5 col-lg-4 col-md-5"></div>
        </div>
      </div>
    </div>
  );
}
export default IndustriesInfo;