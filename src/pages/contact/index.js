import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../../components/layout/baselayout';
import Map from '../../components/contact/map';
import ContactUs from '../../components/contact/contact';
import Banner from '../../components/common/banner/banner';


const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
        <Banner bannerTitle= {frontmatter.title} bannerSubTitle = { frontmatter.banner_sub_title}/>
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
        banner_sub_title
      }
    }
  }
`
