import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/content';
import Layout from '../components/layout';

export const AboutUsTemplate = ({
  heading,
  contentComponent,
  content
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2>{heading}</h2>
          <PostContent content={content} />
        </div>
      </div>
    </div>
  </section>
  )
}

const AboutUsPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <AboutUsTemplate
              heading={post.frontmatter.heading}
              content={post.html}
              contentComponent={HTMLContent}
            />
          </div>
        </div>
        </div>
    </Layout>
  )
}


AboutUsTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  heading: PropTypes.string
}

export default AboutUsPage;

export const pageQuery = graphql`
query DAboutUsByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      title
      heading
    }
  }
}
`

