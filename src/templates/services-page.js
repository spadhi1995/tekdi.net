import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql} from 'gatsby';
import { HTMLContent } from '../components/common/content';
import Layout from '../components/layout/baselayout';
import Banner from '../components/common/banner/banner';
import ServicesInfo from '../components/services/services-info';

const servicesTemplate = ({ data }) => {
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
      <ServicesInfo 
        content={post.html}
        contentComponent={HTMLContent}
      />
      <div id="product-development">
        <ServicesInfo 
          productdevheading= {post.frontmatter.productdevheading}
          content={post.html}
          contentComponent={HTMLContent}
        />
      </div>
      <div id="sass">
        <ServicesInfo 
          sassheading= {post.frontmatter.sassheading}
          content={post.html}
          contentComponent={HTMLContent}
        />
      </div>
      <div id="web-development">
        <ServicesInfo 
          webdevheading= {post.frontmatter.webdevheading}
          content={post.html}
          contentComponent={HTMLContent}
        />
      </div>
      <div id="mobility">
        <ServicesInfo 
          mobilityheading= {post.frontmatter.mobilityheading}
          content={post.html}
          contentComponent={HTMLContent}
        />
      </div>
      <div id="ui-ux">
        <ServicesInfo 
          uiheading= {post.frontmatter.uiheading}
          content={post.html}
          contentComponent={HTMLContent}
        />
      </div>
    </Layout>
  )
}

servicesTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  })
}

export default servicesTemplate;

export const pageQuery = graphql`
  query servicesTemplateByID($id: String!) {
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
        productdevheading
        sassheading
        webdevheading
        mobilityheading
        uiheading
      }
    }
  }
`
