import React from 'react';
import Content from '../common/content';
import './company-info.scss';


const CompanyInfo = ({
  content,
  contentComponent,
  teamheading,
  visionheading
}) => {

  const PostContent = contentComponent || Content

  return(
    <div className="industries-info mb-4">
      <div className="container">
        <h3 className="font-weight-normal text-black">
          {teamheading}
        </h3>
        <h3 className="font-weight-normal text-black">
          {visionheading}
        </h3>       
      
        <div className="main-content row">
          <div className="col-xs-12 content">
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CompanyInfo;