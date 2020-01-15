import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import '../components/css/products.css';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class ProductList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <Fragment>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="product-info" key={post.id}>
              <div className="row">
                  <div className="col-md-6 offset-md-4 mb-5">
                    <h4 className="introtext text-black mb-4">
                      {post.excerpt}
                    </h4>
                    <h4>
                      <Link to={post.fields.slug}>
                        Take to me Vowel 
                      </Link>
                    </h4>
                  </div>
              </div>
              <div className="position-relative description-cover">
                <div className="row position-absolute description">
                  <div className="col-md-5 pt-5">
                    <p className="text-white p-5">
                      {post.frontmatter.subheading}
                    </p>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-10 offset-md-2">
                    <img src={require("../images/banner.jpg")} alt="Join Us" />
                  </div>
                </div>
              </div>
              
              
            </div>
          ))}
     </Fragment>
    )
  }
}

ProductList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProductListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "products-platforms" } } }
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
                heading
                subheading
                
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProductList data={data} count={count} />}
  />
)
