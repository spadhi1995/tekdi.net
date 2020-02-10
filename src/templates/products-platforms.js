import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql} from 'gatsby';
import Layout from '../components/layout/baselayout';
import Banner from "../components/common/banner/banner";
import Products from '../components/products-platforms/product-info';
import ProductList from '../components/products-platforms/product-list';
import FeaturesInfo from '../components/common/features/features-info';

const ProductsPlatforms = ({ data }) => {
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
      <div className="products-platforms">
        <Banner 
          bannerTitle= {post.frontmatter.bannerTitle} 
          bannerSubTitle = {post.frontmatter.bannerSubTitle}
        />
        <Products 
          subheading={post.frontmatter.subheading}
          introtext={post.frontmatter.introtext}
          description={post.frontmatter.description}
          content={post.frontmatter.content}
          excerpt={post.excerpt}
          caseStudyTag={post.frontmatter.caseStudyTag}
        />
        <FeaturesInfo 
        featuresubheading={post.frontmatter.featuresubheading}
        features={post.frontmatter.features}
        />
        <ProductList />
      </div>
    </Layout>
  )
}

ProductsPlatforms.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  })
}

export default ProductsPlatforms;

export const pageQuery = graphql`
  query ProductsPlatformsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      excerpt
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        heading
        subheading
        introtext
        description
        content
        bannerTitle
        bannerSubTitle
        featuresubheading
        caseStudyTag
        features {
            title
            description   
        }
      }
    }
  }
`
