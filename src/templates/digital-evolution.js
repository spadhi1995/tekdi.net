import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout/baselayout';
import Banner from '../components/common/banner/banner';
import DigitalEvolutionInfo from '../components/digital-evolution/digital-evolution-info';
import DigitalEvolutionList from '../components/digital-evolution/digital-evolution-list';
import { HTMLContent } from '../components/common/content';

const DigitalEvolution = ({ data }) => {
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
      <div className="digital-evolution">
        <Banner 
          bannerTitle= {post.frontmatter.bannerTitle} 
          bannerSubTitle = {post.frontmatter.bannerSubTitle}
        />
        <DigitalEvolutionInfo 
          img={post.frontmatter.img}
          mainpitch={post.frontmatter.mainpitch}
          content={post.html}
          contentComponent={HTMLContent}
        />
        <DigitalEvolutionList />
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
      }
    }
  }
`
