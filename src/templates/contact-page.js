import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Map from "../components/map/map"
import ContactUs from "../components/contact/contact"
export const Banner = ({title}) => {
    return(
      <div className="banner">
        <div className="container">
          <div className="banner-text">
            <p className="text-white font-weight-normal">Reach us</p>
              <h1 className="text-white">{title}</h1>
          </div>
        </div>
      </div>
    )
  }

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
        <Banner title={frontmatter.title}/>
        
        <div className="container py-5 careers">
        <div className="row">
          <div className="col-md-8 col-xs-12 offset-md-2">
            {/* <h1 className="text-center text-black mb-5">Current Openings</h1> */}
            <Map></Map>                                               
          </div>
        </div>
       </div>
       <div className="container py-5 careers">
          <div className="col-md-8 col-xs-12 offset-md-2">
            <div className="row">
               
                <div className="col-md-4 col-xs-12">
                    <h4 className="font-weight-bold  text-black">{frontmatter.title}</h4>
                    <h6 className="font-weight-bold text-black">{frontmatter.address_title}</h6>
                   <div>{frontmatter.address} </div> 
                   <h6 className="font-weight-bold mt-2 text-black">{frontmatter.email_title}</h6>
                   <div>{frontmatter.email_address} </div> 
                 </div>  
                 <div className="col-md-8 col-xs-12 "> 
                 <ContactUs></ContactUs>
                  </div>  
            </div>
          </div>                         
        </div>
    </Layout>
  )
  }


ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        address 
        address_title
        email_title
        email_address
      }
    }
  }
`
