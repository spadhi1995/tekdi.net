import React from 'react';
import Content from '../content';
import './case-study-info.scss';

const CaseStudyInfo = ({
  content,
  contentComponent,
  heading,
}) => {

  const PostContent = contentComponent || Content

  return(
    <div className="case-study-info my-4">
      <div className="container">     
        <div className="main-content">          
              <div className="content">
                <PostContent content={content} />
              </div>          
        </div>
      </div>
    </div>
  );
}
export default CaseStudyInfo;