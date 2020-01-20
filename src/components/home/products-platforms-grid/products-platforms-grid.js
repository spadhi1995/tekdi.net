import React from "react";
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../../preview-compatible-image';
import "./product-platform-grid.css"

class ProductsPlatformsGrid extends React.Component {
    render() {

    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
  
        return (
            <div className="row">
                {posts &&
                posts.map(({ node: post }) => (
                    <div className="col-md-3 col-sm-6 col-xs-12 pl-1 pr-1" key={post.id}>
                        <div className="prod-item px-3 py-4">
                          <div className="icon mb-3">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: post.frontmatter.icon,
                                  alt: `icon for ${post.frontmatter.title}`,
                                }}
                              />
                            </div>
                          <h3 className="section-title text-black mb-4">
                              {post.frontmatter.heading}
                          </h3>
                          <p className="mb-0 font-weight-normal">
                            {post.excerpt}
                            <br/>
                            <br/>
                            <Link to={post.fields.slug}>View More</Link>
                          </p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

ProductsPlatformsGrid.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }
  
  export default () => (
    <StaticQuery
      query={graphql`
        query ProductsPlatformsGridQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "products-platforms" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 150)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  heading
                  subheading
                  icon {
                    childImageSharp {
                      fluid(maxWidth: 60, quality: 100) {
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
      render={(data, count) => <ProductsPlatformsGrid data={data} count={count} />}
    />
  )
  