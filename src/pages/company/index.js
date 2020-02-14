import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql} from 'gatsby';
import Layout from '../../components/layout/baselayout';
import Banner from '../../components/common/banner/banner';
import CompanyInfo from '../../components/company/company-info';
import CorePurpose from '../../components/company/core-purpose';
import CoreValuesCarousel from '../../components/company/core-values-carousel';

const CompanyTemplate = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        {/* <meta
          name="description"
          content={`${frontmatter.subheading}`}
        /> */}
      </Helmet>
      <Banner 
          bannerTitle= {post.frontmatter.bannerTitle} 
          bannerSubTitle = {post.frontmatter.bannerSubTitle}
      />
      <CompanyInfo 
        companyInfo={post.frontmatter.companyInfo}
        companyImg={post.frontmatter.companyImg}
        projectInfo={post.frontmatter.projectInfo}
      />
      <CorePurpose 
        corePurposeHeading={post.frontmatter.corePurposeHeading}
        corePurposeDesc={post.frontmatter.corePurposeDesc}
        corePurposeImg={post.frontmatter.corePurposeImg}
      />
      <CoreValuesCarousel />
      {/* <div id="team">
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
      </div> */}
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
  query CompanyTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "company-page" } }) {
      html
      frontmatter {
        title
        bannerTitle
        bannerSubTitle
        companyInfo
        companyImg {
          childImageSharp {
            fluid(maxWidth: 350, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        projectInfo {
          title
          description   
        }
        corePurposeHeading
        corePurposeDesc
        corePurposeImg {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
