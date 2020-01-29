import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './features-list.scss';

class FeaturesList extends React.Component {
  render(){
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const params = {
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        992: {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 0,
          centeredSlides: true
        },
        640: {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 0,
          centeredSlides: true
        },
        320: {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true
        }
      }
    }

    return ( 
      <div className="features-list">
        <Swiper {...params}>
          {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <h4 className="font-weight-bold">{post.frontmatter.heading}</h4>
              <p>
                {post.frontmatter.subheading}
              </p>
            </div>
          ))}
        </Swiper>
      </div>
    )
  }
}
export default () => (
  <StaticQuery
    query={graphql`
      query FeaturesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "features" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                heading
                subheading
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FeaturesList data={data} count={count} />}
  />
)
