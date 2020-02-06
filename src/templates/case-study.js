import React from 'react';
import Helmet from 'react-helmet';
import { graphql} from 'gatsby';
import Layout from '../components/layout/baselayout';
import Banner from "../components/common/banner/banner";
import CaseStudyInfo from '../components/common/case-studies/case-study-info';
import { HTMLContent } from '../components/common/content';
class CaseStudyTemplate extends React.Component {
    render()
    {
    const { markdownRemark: post } = this.props.data
      let modalSubmit = this.props.location.state !==null ?  this.props.location.state.modalSubmit : false
      return (
        <Layout>
          <Helmet>
            <title>{post.frontmatter.title}</title>
            <meta
              name="description"
              content={`${post.frontmatter.subheading}`}
            />
          </Helmet>
          <Banner 
              bannerTitle= {post.frontmatter.bannerTitle} 
              bannerSubTitle = {post.frontmatter.bannerSubTitle}
            />
          {modalSubmit === true ? (
          <CaseStudyInfo
            heading = {post.frontmatter.heading}
            content={post.html}
            contentComponent={HTMLContent}
          />
          ) : "Please fill the information" }
        </Layout>
      )
  }
}

export default CaseStudyTemplate;

export const pageQuery = graphql`
  query CaseStudyTemplateByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        heading   
        bannerTitle
        bannerSubTitle
      }
    }
  }
`
