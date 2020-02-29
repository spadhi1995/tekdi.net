import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../common/preview-compatible-image';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './industries-carousel.scss';

class IndustriesCarousel extends React.Component {
    
    render(){
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        const params = {
          navigation: {
            nextEl: '.swiper-button-next',
          },
          loop: true,
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        };

        return (
        <div className="container"> 
            <div className="industries-carousel row">
                <Swiper {...params}>
                    {posts &&
                        posts.map(({ node: post }) => (
                        <div className="item blue-bg" key={post.id}>
                            <div className="item-inner text-white">
                              <div className="icon">
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image: post.frontmatter.icon,
                                    alt: `icon for ${post.frontmatter.title}`,
                                  }}
                                />
                              </div>
                              <div className="hover-icon">
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image: post.frontmatter.hovericon,
                                    alt: `icon for ${post.frontmatter.title}`,
                                  }}
                                />
                              </div>
                              <h3 className="section-title mt-4 mb-2">{post.frontmatter.title}</h3>
                              <p className="font-weight-normal">
                              {post.frontmatter.subheading.substring(0,130)+"..."}
                                <br/>
                                <br/>
                                <Link to={post.fields.slug} className="font-weight-bold">View More </Link>
                              </p>
                            </div>
                        </div>
                    ))}
                </Swiper> 
            </div>
        </div> 
        )
    }
}

IndustriesCarousel.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
    <StaticQuery
      query={graphql`
        query IndustriesCarouselQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "industries-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 120)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  subheading
                  icon {
                    childImageSharp {
                      fluid(maxWidth: 60, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  hovericon {
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
      render={(data, count) => <IndustriesCarousel data={data} count={count} />}
    />
  )
  