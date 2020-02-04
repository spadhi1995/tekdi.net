import React from 'react';
import CaseStudiesList from '../common/case-studies/case-studies-list';
import './products.scss';

const Products = props => {
  return(
    <div className="container">
      <div className="product-info">
        <div className="row section1">
          <div className="col-lg-2"></div>
          <div className="col-lg-6 col-md-7 mb-5">
            <h4 className="introtext text-black mb-4">
              {props.introtext}
            </h4>
          </div>
          <div className="mb-5 col-lg-4 col-md-5">
            <CaseStudiesList caseStudyTag={props.caseStudyTag}/>
          </div>
        </div>
        
        <div className="row section2">
          <div className="col-lg-6 col-md-8 description">
            <p className="text-white ">
              {props.description}
            </p>
          </div>
        </div>
        
        <div className="row section3">
          <div className="col-lg-10 offset-lg-2 col-md-11 offset-md-1 col-xs-12 bg-color">
            <div className="bg-image">
              <div className="col-lg-5 col-md-7 content">
                <p>
                  {props.content}
                </p>
              </div>
              </div>
          </div>
        </div> 

        <div className="row section4">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <p className="text-center text-black">
              {props.excerpt}
            </p>
          </div>
        </div>           
      </div>
    </div>
  );
}
export default Products;