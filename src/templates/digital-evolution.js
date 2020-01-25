import React from 'react';
import PropTypes from 'prop-types';
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout/baselayout';
import Content, { HTMLContent } from '../components/common/content';
import Banner from "../components/common/banner/banner";
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import DigitalEvolutionList from '../components/digital-evolution/digitalevolution';


export const DigitalEvolutionTemplate = ({
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
      {/* <div className="image-thumbnail">
        <PreviewCompatibleImage
          imageInfo={{
            image,
            alt: `image for post ${title}`,
          }}
        />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p>{subheading}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

DigitalEvolutionTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  helmet: PropTypes.object,
}

const DigitalEvolution = ({ data }) => {
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
            <DigitalEvolutionTemplate
              content={post.html}
              contentComponent={HTMLContent}
              helmet={
                <Helmet titleTemplate="%s | Blog">
                  <title>{`${post.frontmatter.title}`}</title>
                  <meta
                    name="description"
                    content={`${post.frontmatter.description}`}
                  />
                </Helmet>
              }
              heading={post.frontmatter.heading}
              subheading={post.frontmatter.subheading}
            />
          </div>
        </div>
      </div>
      <div className="digital-evolution">
        <DigitalEvolutionList />
      </div>
    </Layout>
  )
}

DigitalEvolution.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default DigitalEvolution

export const pageQuery = graphql`
  query DigitalEvolutionByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        heading
        subheading
        bannerSubTitle
      }
    }
  }
`
