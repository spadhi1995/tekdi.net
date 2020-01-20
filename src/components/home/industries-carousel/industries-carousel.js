import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../../preview-compatible-image';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './industries-carousel.css';

class IndustriesCarousel extends React.Component {
    
    render(){
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        const params = {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bullets: true
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev'
          // },
          slidesPerView: 'auto',
          loop: true,
          loopFillGroupWithBlank: true,
          // effect: 'coverflow',
          // grabcursor: true,
          // coverflowEffect: {
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: true
          // },
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
                              <h3 className="section-title mt-4 mb-2">{post.frontmatter.title}</h3>
                              <p className="font-weight-normal">
                                {post.excerpt}
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
      render={(data, count) => <IndustriesCarousel data={data} count={count} />}
    />
  )
  