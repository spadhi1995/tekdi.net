import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class BlogCatList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="bg-white p-4">
        <h3 className="text-black mod-title mb-3 pb-3">Categories</h3>
        <ul className="blog-cat-list unstyled">
          {posts &&
            posts.map(({ node: post }) => (
              <li>{post.frontmatter.category}</li>
          ))}
        </ul>
      </div>
    )
  }
}

BlogCatList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogCatListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              frontmatter {
                category
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogCatList data={data} count={count} />}
  />
)
