import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const CareersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout></Layout>
  )
  }


CareersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CareersPage;

export const pageQuery = graphql`
  query CareersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "careers-page" } }) {
      frontmatter {
        title
      }
    }
  }
`

