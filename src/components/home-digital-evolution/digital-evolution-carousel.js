import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../common/preview-compatible-image';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './digital-evolution-carousel.scss';

class DigitalEvolutionCarousel extends React.Component {
  
    
    render() {
      const { data } = this.props
      const { edges: posts } = data.allMarkdownRemark

      const params = {
        navigation: {
          nextEl: '.swiper-button-next',
        },
        loop:true,
        //slidesPerColumn: 2,
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 30
          }
        }
      };

      return (  
        <div className="digital-evolution-carousel">
          <Swiper {...params}>
            {posts &&
            posts.map(({ node: post }) => (
              <div key={post.id}>
                <div className="row">
                  <div className="col-md-5">
                    {post.frontmatter.bgimage ? (
                      <div className="">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.bgimage,
                            alt: `image thumbnail for post ${post.frontmatter.heading}`,
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div className="col-md-7">
                    <h3 className="text-black font-weight-bold section-title">{post.frontmatter.heading}</h3>
                    <p className="font-weight-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
    )
  }
}

DigitalEvolutionCarousel.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query DigitalEvolutionCarouselQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "digital-evolution" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 150)
              id
              fields {
                slug
              }
              frontmatter {
                date(formatString: "DD MMMM YYYY")
                heading
                subheading
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
    render={(data, count) => <DigitalEvolutionCarousel data={data} count={count} />}
  />
)
