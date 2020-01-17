import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const VisionPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark
  return (
    <Layout></Layout>
  )
  }


  VisionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VisionPage;

export const pageQuery = graphql`
  query VisionPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "vision-page" } }) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`

