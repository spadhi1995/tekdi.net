import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../../preview-compatible-image';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../industries-carousel/industries-carousel.css';

class TestimonialCarousel extends React.Component {
  render(){
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
    <div className="container"> 
      <div className="com-cover">
        <div className="col-md-6 offset-md-3 mb-5">
        <h2 className="com-heading text-center text-black mb-3">Trusted by Global Brands</h2>
          <OwlCarousel
              className="owl-theme"
              items={1}
              loop={true}
              dots={true}
          >
            {posts &&
              posts.map(({ node: post }) => (
          
              <div className="item testimonial-carousel" key={post.id}>
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
              </div>
            ))}
          </OwlCarousel>  
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
  