import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../../components/layout/baselayout';

const TeamPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark
  return (
    <Layout></Layout>
  )
  }


  TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TeamPage;

export const pageQuery = graphql`
  query TeamPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "team-page" } }) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`

