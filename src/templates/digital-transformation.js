import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout/baselayout';
import Banner from '../components/common/banner/banner';
import DigitalEvolutionInfo from '../components/digital-evolution/digital-evolution-info';
import DigitalEvolutionList from '../components/digital-evolution/digital-evolution-list';
import { HTMLContent } from '../components/common/content';
import ContactUs from '../components/common/contact/contact';

const DigitalEvolution = ({ data }) => {
  const { markdownRemark: post } = data
  //const { modal } = this.props
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta property="og:title" content={`${post.frontmatter.title}`} />
        <meta property="og:description" content={`${post.frontmatter.subheading}`} />
        <meta property="og:image" content={`${post.frontmatter.image}`} />
        <meta property="og:type" content="website" />

        <meta name="description" content={`${post.frontmatter.subheading}`} />
      </Helmet>
      <div className="digital-evolution-page">
        <Banner 
          bannerTitle= {post.frontmatter.bannerTitle} 
          bannerSubTitle = {post.frontmatter.bannerSubTitle}
        />
        <DigitalEvolutionInfo 
          img={post.frontmatter.img}
          mainpitch={post.frontmatter.mainpitch}
          content={post.html}
          contentComponent={HTMLContent}
          caseStudyTag={post.frontmatter.caseStudyTag}
        />
        <DigitalEvolutionList />
        <ContactUs />
      </div>
    </Layout>
  )
}

DigitalEvolution.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  })
}

export default DigitalEvolution;

export const pageQuery = graphql`
  query DigitalEvolutionByID($id: String!) {
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
        mainpitch {
          title
          description
        }
        img {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuresubheading
        features {
            title
            description   
        }
      }
    }
  }
`
