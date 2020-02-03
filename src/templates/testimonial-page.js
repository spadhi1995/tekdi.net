import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/common/preview-compatible-image';
import Layout from '../components/layout/baselayout';

export const TestimonialTemplate = ({
  heading,
  subheading,
  icon,
  title
}) => {

  return (
    <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2>{heading}</h2>
          <p>{subheading}</p>
          <div>
          <PreviewCompatibleImage
            imageInfo={{
              image: icon,
              alt: `icon ${title}`,
            }}
          />
          </div>
         
        </div>
      </div>
    </div>
  </section>
  )
}

const TestimonialPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <TestimonialTemplate
              heading={post.frontmatter.heading}
              subheading={post.frontmatter.subheading}
              icon={post.frontmatter.icon}
            />
          </div>
        </div>
        </div>
    </Layout>
  )
}


TestimonialTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string
}

export default TestimonialPage;

export const pageQuery = graphql`
query TestimonialByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      title
      heading
      subheading
      icon {
        childImageSharp {
          fluid(maxWidth: 150, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

