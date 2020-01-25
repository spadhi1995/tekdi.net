import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/baselayout';
import Content, { HTMLContent } from '../components/common/content';

export const OpeningsTemplate = ({
  content,
  contentComponent,
  heading,
  type,
  location,
  subheading
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="openings">
          <h1 className="title text-black ajskd">
            {heading}
          </h1>
          <p>
            Type {type}
          </p>
          <p>
            Location {location}
          </p>
          <p>
            {subheading}
            <PostContent content={content} />
          </p>
        </div>
      </div>
    </section>
  )
}

OpeningsTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  heading: PropTypes.string,
  type: PropTypes.string,
  location: PropTypes.string,
  subheading: PropTypes.string,
  helmet: PropTypes.object,
}

const Openings = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
       <div className="container py-5">
        <div className="row">
          <div className="col-xs-12">
            <OpeningsTemplate
              content={post.html}
              contentComponent={HTMLContent}
              heading={post.frontmatter.heading}
              type={post.frontmatter.type}
              location={post.frontmatter.location}
              subheading={post.frontmatter.subheading}
            />
          </div>
        </div>
       </div>
    </Layout>
  )
}

Openings.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Openings;

export const pageQuery = graphql`
  query OpeningsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        heading
        type
        location
        subheading
      }
    }
  }
`
