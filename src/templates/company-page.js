import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const CompanyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout></Layout>
  )
  }


CompanyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CompanyPage;

export const pageQuery = graphql`
  query CompanyPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "company-page" } }) {
      frontmatter {
        title
      }
    }
  }
`

