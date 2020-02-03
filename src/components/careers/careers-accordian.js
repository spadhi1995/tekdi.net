import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import './careers.scss';
import Collapsible from 'react-collapsible';

class Openingslist extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
    <Fragment>
      {posts &&
      posts.map(({ node: post }) => (
        <Collapsible trigger={`${post.frontmatter.heading}`} key={post.id}>
          <ul className="unstyled mb-4">
            <li className="mr-4">Type <span className="text-black">{post.frontmatter.type}</span></li>
            <li>Location <span className="text-black">{post.frontmatter.location}</span></li>
          </ul>
          <p>
            {post.frontmatter.subheading}
          </p>
        </Collapsible>
      ))}
    </Fragment>
    )
  }
}

Openingslist.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query OpeningslistQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "positions" } } }
        ) {
          edges {
            node {
              excerpt
              id
              fields {
                slug
              }
              frontmatter {
                title
                heading
                type
                location
                subheading
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Openingslist data={data} count={count} />}
  />
)
