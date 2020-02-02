import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql} from 'gatsby';
import { HTMLContent } from '../components/common/content';
import Layout from '../components/layout/baselayout';
import Banner from '../components/common/banner/banner';
import CompanyInfo from '../components/company/company-info';

const CompanyTemplate = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        {/* <meta
          name="description"
          content={`${post.frontmatter.subheading}`}
        /> */}
      </Helmet>
      <Banner 
          bannerTitle= {post.frontmatter.bannerTitle} 
          bannerSubTitle = {post.frontmatter.bannerSubTitle}
      />
      <CompanyInfo 
        content={post.html}
        contentComponent={HTMLContent}
      />
      <div id="team">
      <CompanyInfo 
        teamheading= {post.frontmatter.teamheading}
        content={post.html}
        contentComponent={HTMLContent}
      />
      </div>
      <div id="vision">
       <CompanyInfo 
        visionheading= {post.frontmatter.visionheading}
        content={post.html}
        contentComponent={HTMLContent}
      />
      </div>
    </Layout>
  )
}

CompanyTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  })
}

export default CompanyTemplate;

export const pageQuery = graphql`
  query CompanyTemplateByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        bannerTitle
        bannerSubTitle
        teamheading
        visionheading
      }
    }
  }
`
