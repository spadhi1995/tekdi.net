import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../common/preview-compatible-image';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './testimonial-carousel.scss';

class TestimonialCarousel extends React.Component {
  render(){
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bullets: true
      },
      loop: true,
      loopFillGroupWithBlank: true,
      grabCursor: true
    };
    return (
    <div className="container"> 
      <div className="com-cover">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 testimonial-carousel">
        <h2 className="com-heading text-center text-black mb-3">Trusted by Global Brands</h2>
          <Swiper {...params}>
            {posts &&
              posts.map(({ node: post }) => (
          
              <div className="item" key={post.id}>
                <div className="tsml-img float-left">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.img,
                      alt: `icon ${post.frontmatter.title}`,
                    }}
                  />
                </div>
                <div className="tsml-info float-left">
                  <p>{post.frontmatter.subheading}</p>
                  <p className="tsml-author">
                    {post.frontmatter.heading}
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
            ))}
          </Swiper>  
       </div>
      </div>
    </div> 
    )
}
}

TestimonialCarousel.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
    <StaticQuery
      query={graphql`
        query TestimonialCarouselQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "testimonial-page" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  heading
                  subheading
                  img {
                    childImageSharp {
                      fluid(maxWidth: 200, quality: 100) {
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
      render={(data, count) => <TestimonialCarousel data={data} count={count} />}
    />
  )
  