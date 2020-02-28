import React from 'react';
import { graphql} from 'gatsby';
import SEO from '../components/common/site-metadata';
import Layout from '../components/layout/baselayout';
import Banner from "../components/common/banner/banner";
import CaseStudyInfo from '../components/common/case-studies/case-study-info';
import { HTMLContent } from '../components/common/content';
import ContactUs from '../components/common/contact/contact';
class CaseStudyTemplate extends React.Component {

    render()
    {
    const { markdownRemark: post } = this.props.data
      return (
        <Layout>
         <SEO 
            title={post.frontmatter.title}
            description={post.excerpt}
            metakeywords={post.frontmatter.keywords}
          />
          <Banner 
              bannerTitle= {post.frontmatter.bannerTitle} 
              bannerSubTitle = {post.frontmatter.bannerSubTitle}
            />
          {/* {this.modalSubmit === true ? ( */}
          <CaseStudyInfo
            heading = {post.frontmatter.heading}
            content={post.html}
            contentComponent={HTMLContent}
          />
          {/* ) : <h3>Please fill the information</h3> } */}
           <ContactUs />
        </Layout>
      )
  }
}

export default CaseStudyTemplate;

export const pageQuery = graphql`
  query CaseStudyTemplateByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 200)
      fields {
        slug
      }
      html
      frontmatter {
        title
        keywords
        heading   
        bannerTitle
        bannerSubTitle
      }
    }
  }
`
