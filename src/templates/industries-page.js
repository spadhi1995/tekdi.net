import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout/baselayout';
import Banner from '../components/common/banner/banner';
import IndustriesInfo from '../components/industries/industries-info';
import  IndustriesList from '../components/industries/industries-list';
import { HTMLContent } from '../components/common/content';
import ContactUs from '../components/common/contact/contact';

const IndustriesPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout> 
      <Helmet>
  <title>{post.frontmatter.title}</title>
        <meta
          name="description"
          content={`${post.frontmatter.subheading}`}
        />
      </Helmet>
      <div className="industries">
        <Banner 
          bannerTitle= {post.frontmatter.bannerTitle} 
          bannerSubTitle = {post.frontmatter.bannerSubTitle}
        />
        <IndustriesInfo 
          subheading={post.frontmatter.subheading}
          content={post.html}
          contentComponent={HTMLContent}
          caseStudyTag={post.frontmatter.caseStudyTag}
        />
        <IndustriesList />
        <ContactUs />
      </div>
    </Layout>
  )
  }


IndustriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndustriesPage;

export const pageQuery = graphql`
  query IndustriesPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      excerpt
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        bannerTitle
        bannerSubTitle
        subheading
        caseStudyTag    
        featuresubheading
        features {
            title
            description   
        }        
      }
    }
  }
`


