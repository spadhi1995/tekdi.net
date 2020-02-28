import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import ProductsPlatformsGrid from './products-platforms-grid';


class ProductsPlatforms extends React.Component {
    
    render(){
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
        <div className="container">
          <div className="com-cover"> 
            {posts &&
                posts.map(({ node: post }) => (
                <div className="text-center col-md-6 offset-md-3 mb-5" key={post.id}>
                  <h2 className="com-heading text-black">{post.frontmatter.title}</h2>
                  <p>{post.frontmatter.subheading}</p>
                </div>
            ))}
            <ProductsPlatformsGrid />
          </div>
        </div> 
        )
    }
}

ProductsPlatforms.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
    <StaticQuery
      query={graphql`
        query ProductsPlatformsQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "home-products-platforms" } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  subheading
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ProductsPlatforms data={data} count={count} />}
    />
  )
  