import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql} from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductsPlatformsTemplate = ({
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
        <div className="blog-detail">
          <div className="">
            <h1 className="title text-black">
              {heading}
            </h1>
            <p>{subheading}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

ProductsPlatformsTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  helmet: PropTypes.object,
}

const ProductsPlatforms = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
       <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <ProductsPlatformsTemplate
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
    </Layout>
  )
}

ProductsPlatforms.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProductsPlatforms

export const pageQuery = graphql`
  query ProductsPlatformsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
