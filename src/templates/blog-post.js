import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/baselayout';
import Content, { HTMLContent } from '../components/common/content';
import BlogCatList from '../components/blog/blogcatlist';
import ContactUs from '../components/common/contact/contact';
import './blog.scss';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  image,
  author,
  date,
  category,
  catslug
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      {/* <div className="featured-thumbnail">
        <PreviewCompatibleImage
          imageInfo={{
            image,
            alt: `featured image for post ${title}`,
          }}
        />
      </div> */}
      <div className="container">
        <div className="blog-detail">
          <div className="">
            <h1 className="title text-black">
              {title}
            </h1>
            <ul className="unstyled mb-4">
              <li className="blog-author mr-4">
                By <span className="author-name text-black">{author}</span>
              </li>
              <li className="blog-date mr-4">
                On <span className="text-black">{date}</span>
              </li>
              <li className="blog-category">
                In <Link to={catslug}>{category}</Link>
              </li>
            </ul>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
       <div className="container py-5">
        <div className="row">
          <div className="col-md-9">
            <BlogPostTemplate
              content={post.html}
              contentComponent={HTMLContent}
              description={post.frontmatter.description}
              helmet={
                <Helmet titleTemplate="%s | Blog">
                  <title>{`${post.frontmatter.title}`}</title>
                  <metaBlogPostTemplate
                    name="description"
                    content={`${post.frontmatter.description}`}
                  />
                </Helmet>
              }
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
              image={post.frontmatter.featuredimage}
              author={post.frontmatter.author}
              category={post.frontmatter.category.join()}
              date={post.frontmatter.date}
              catslug={post.fields.slug}
            />
          </div>
            <div className="col-md-3">
              <BlogCatList />
            </div>
        </div>
       </div>
       <ContactUs />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
        author
        category
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
