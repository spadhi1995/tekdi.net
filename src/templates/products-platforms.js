import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/common/site-metadata';
import { graphql} from 'gatsby';
import Layout from '../components/layout/baselayout';
import Banner from "../components/common/banner/banner";
import Products from '../components/products-platforms/product-info';
import ProductList from '../components/products-platforms/product-list';
// import FeaturesInfo from '../components/common/features/features-info';
import ContactUs from '../components/common/contact/contact';

const ProductsPlatforms = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title}
        metakeywords= {post.frontmatter.metakeywords}
        metadescription={post.frontmatter.metadescription}
        ogimage={post.frontmatter.ogimage}
      />
      <div className="products-platforms">
        <Banner 
          bannerTitle= {post.frontmatter.title} 
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
        {/* <FeaturesInfo 
        featuresubheading={post.frontmatter.featuresubheading}
        features={post.frontmatter.features}
        /> */}
        <ProductList />
        <ContactUs />
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
        metakeywords
        metadescription
        ogimage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }        
        subheading
        introtext
        description
        content
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
