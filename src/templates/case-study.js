import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql} from 'gatsby';
import Layout from '../components/layout/baselayout';
import Banner from "../components/common/banner/banner";
import CaseStudyInfo from '../components/common/case-studies/case-study-info';
import { HTMLContent } from '../components/common/content';

const CaseStudyTemplate = ({ data }) => {
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
      <Banner 
          bannerTitle= {post.frontmatter.bannerTitle} 
          bannerSubTitle = {post.frontmatter.bannerSubTitle}
        />
      <CaseStudyInfo
        heading = {post.frontmatter.heading}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

CaseStudyTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  })
}

export default CaseStudyTemplate;

export const pageQuery = graphql`
  query CaseStudyTemplateByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        heading   
        bannerTitle
        bannerSubTitle
      }
    }
  }
`
