import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../../components/content';
import Banner from '../../components/banner/banner';
import Layout from '../../components/layout';

export const AboutUsTemplate = ({
  content,
  contentComponent,
  helmet,
  heading,
  subheading
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
        <div className="">
          <h1 className="title text-black">
            {heading}
          </h1>
          <p>{subheading}</p>
          <PostContent content={content} />
        </div>
    </section>
  )
}


const AboutUsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Banner 
        bannerTitle= {post.frontmatter.title} 
        bannerSubTitle = {post.frontmatter.bannerSubTitle}
      />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
          <AboutUsTemplate
            helmet={
              <Helmet titleTemplate="%s">
                <title>{`${post.frontmatter.title}`}</title>
                <meta
                  name="description"
                  content={`${post.frontmatter.description}`}
                />
              </Helmet>
            }
              heading={post.frontmatter.heading}
              subheading={post.frontmatter.subheading}
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
  heading: PropTypes.string,
  subheading: PropTypes.string,
  helmet: PropTypes.object,
}

export default AboutUsPage;

export const pageQuery = graphql`
  query AboutUsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "aboutus-page" } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        heading
        subheading
      }
    }
  }
`

