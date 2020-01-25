import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout/baselayout';

const IndustriesPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark
  return (
    <Layout></Layout>
  )
  }


  IndustriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndustriesPage;

export const pageQuery = graphql`
  query IndustriesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "industries-page" } }) {
      frontmatter {
        title
      }
    }
  }
`

