import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import './productlist.scss';
import PreviewCompatibleImage from '../common/preview-compatible-image';

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    var url =  typeof window !== 'undefined' ? window.location.href : '';
    if(url)
     {
        this.boxId = url.match(/\/([^\/]+)\/?$/)[1];
     }
     else
     {
        this.boxId = "";
     }
  }
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="container-fluid">
      <div className="row productlist">
        {posts &&
        posts.map(({ node: post }) => (
          this.boxId !== post.fields.slug.match(/\/([^\/]+)\/?$/)[1] ? (
          <div key={post.id} className="col p-0">
            <div className="box">
              {post.frontmatter.bgimage ? (
                  <div className="bg-image">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.bgimage,
                        alt: `image thumbnail for post ${post.frontmatter.heading}`,
                      }}
                    />
                  </div>
                ) : null}
                <div className="text position-absolute">
                  <h4 className="mb-4">
                    {post.frontmatter.heading}
                  </h4>
                  <Link to={post.fields.slug} className="text-decoration-none">
                    <img src={require('./images/readmore-white.png')} alt="read more"/>
                  </Link>
                </div>
              </div>
          </div>
            ) : null
        ))}
      </div>
   </div>
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
                heading
                bgimage {
                  childImageSharp {
                    fluid(maxWidth: 250, quality: 100) {
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
    render={(data, count) => <ProductList data={data} count={count} />}
  />
)
