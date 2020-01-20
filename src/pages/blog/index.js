import React from 'react'

import Layout from '../../components/layout';
import BlogList from '../../components/bloglist'; 
import BlogCatList from '../../components/blogcatlist';
import Banner from "../../components/banner/banner"

export default class BlogIndexPage extends React.Component {
   
  render() {
    const StaticPage = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <Banner bannerTitle= {StaticPage.bannerTitle} bannerSubTitle = {StaticPage.bannerSubTitle}/>
        
        <div className="container py-5">
          <div className="row">
            <div className="col-md-9">
              <BlogList />
            </div>
            <div className="col-md-3">
              <BlogCatList />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query blogBanner {
    markdownRemark(frontmatter: { templateKey: { eq: "blog-banner" } }) {
      frontmatter {
        bannerTitle
        bannerSubTitle
      }
    }
  }
`