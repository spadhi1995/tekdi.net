
import Layout from '../components/layout'
import BlogPagination from '../components/blog/pagination';
import renderList from '../components/blog/renderlist';
import { Link, graphql } from 'gatsby'
import PreviewCompatibleImage from '../components/preview-compatible-image'
import BlogCatList from '../components/blog/blogcatlist';
import Banner from "../components/banner/banner"
import ContactUs from "../components/footer-contact/contact"
import React, { Fragment } from 'react'
import lodash from "lodash"

 class BlogTagPage extends React.Component {
   
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages, tag, allTag } = this.props.pageContext
    return (
      <Layout>
        <Banner bannerTitle= "blogs" bannerSubTitle = "blogs"/> 
        <div className="container py-5">
          <div className="row">
            <Fragment>
                <div className="col-md-9">
                  {
                    posts.map(renderList)
                  }
              <BlogPagination 
                currentPage={currentPage}
                numPages={numPages}
                contextPage={"tags/" + lodash.kebabCase(tag)}
               />
            
          </div> 
            </Fragment>
            <div className="col-md-3">
              <BlogCatList />
            </div>
          </div>
        </div>
        <ContactUs/>
      </Layout>
    )
  }
}
export default BlogTagPage;

export const blogTagListQuery = graphql`
query BlogListTagQuery($tag: String,$skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    filter: {frontmatter: {templateKey: {eq: "blog-post"}, tags: {in: [$tag]}}}
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        excerpt(pruneLength: 200)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "DD MMMM YYYY")
          author
          category
          featuredpost
          featuredimage {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}`