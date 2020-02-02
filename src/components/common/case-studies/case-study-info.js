import React from 'react';
import Content from '../content';

const CaseStudyInfo = ({
  content,
  contentComponent,
  heading,
}) => {

  const PostContent = contentComponent || Content

  return(
    <div className="case-study-info mb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <div className="introtext">
                <p className="font-weight-normal text-black">
                  {heading}
                </p>
            </div>
          </div>
        </div>          
      
        <div className="main-content row">          
              <div className="col-xs-12 content">
                <PostContent content={content} />
              </div>          
        </div>
      </div>
    </div>
  );
}
export default CaseStudyInfo;