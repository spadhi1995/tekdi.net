import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql} from 'gatsby';
import { HTMLContent } from '../../components/common/content';
import Layout from '../../components/layout/baselayout';
import Banner from '../../components/common/banner/banner';
import TechnologyInfo from '../../components/technology/technology-info';

const TechnologyTemplate = ({ data }) => {
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
      <TechnologyInfo 
        content={post.html}
        contentComponent={HTMLContent}
      />
      <div id="joomla">
        <TechnologyInfo 
          joomlaheading= {post.frontmatter.joomlaheading}
          content={post.html}
          contentComponent={HTMLContent}
        />
      </div>
      <div id="angular">
        <TechnologyInfo 
          angularheading= {post.frontmatter.angularheading}
          content={post.html}
          contentComponent={HTMLContent}
        />
      </div>
      <div id="php-frameworks">
        <TechnologyInfo 
          phpheading= {post.frontmatter.phpheading}
          content={post.html}
          contentComponent={HTMLContent}
        />
      </div>
    </Layout>
  )
}

TechnologyTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  })
}

export default TechnologyTemplate;

export const pageQuery = graphql`
  query TechnologyTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "technology-page" } }) {
      html
      frontmatter {
        title
        bannerTitle
        bannerSubTitle
        joomlaheading
        angularheading
        phpheading
      }
    }
  }
`
