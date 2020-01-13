import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <Fragment>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="blog-list mb-5 pb-5" key={post.id}>
              <div
                className={`row ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <div className="col-md-3 col-sm-4 col-xs-12">
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  </div>
                  <div className="col-md-9 col-sm-8 col-xs-12 blog-info">
                    <h3 className="blog-title">
                      <Link to={post.fields.slug} >
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                    <ul className="unstyled mb-4">
                      <li className="blog-author mr-4">
                        By <span className="author-name text-black">{post.frontmatter.author}</span>
                      </li>
                      <li className="blog-date mr-4">
                        On <span className="text-black">{post.frontmatter.date}</span>
                      </li>
                      <li className="blog-category">
                        In <Link to={post.fields.slug}>{post.frontmatter.category}</Link>
                      </li>
                    </ul>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link to={post.fields.slug}>
                        Keep Reading
                      </Link>
                    </p>
                  </div>
              </div>
            </div>
          ))}
     </Fragment>
    )
  }
}

BlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogList data={data} count={count} />}
  />
)
