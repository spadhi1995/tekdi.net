import React from "react";
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../common/preview-compatible-image';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import "./product-platform-grid.scss"

class ProductsPlatformsGrid extends React.Component {
    render() {

    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    const params = {
      loop: true,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    }
        return (
            <div className="products-carousel">
              <Swiper {...params}>
                {posts &&
                posts.map(({ node: post }) => (
                    <div className="p-1" key={post.id}>
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
                </Swiper>
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
  