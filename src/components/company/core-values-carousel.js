import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './core-values.scss';
import Content, { HTMLContent } from '../common/content';

export const CoreValuesDetail = ({
  content,
  contentComponent
}) => {
  const PostContent = contentComponent || Content

  return (
    <PostContent content={content} />
  )
}
class CoreValuesCarousel extends React.Component {
    
  render(){

      const { data } = this.props
      const { edges: posts } = data.allMarkdownRemark

      const params = {
        spaceBetween: 20,

        breakpoints: {
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          }
        }
      };

      return (
      <div className="core-values"> 
        <div className="bg-image">
          <h2 className="com-heading text-center text-white">Core Values</h2>
        </div>
        <div className="core-values-carousel">
            <Swiper {...params}>
                {posts &&
                    posts.map(({ node: post }) => (
                    <div className="item" key={post.id}>
                      <h4 className="text-black font-weight-bold mb-3">{post.frontmatter.heading}</h4>
                      <div className="main-content">
                        <CoreValuesDetail
                          content = {post.html}
                          contentComponent = {HTMLContent}
                        />
                      </div>
                    </div>
                ))}
            </Swiper> 
        </div>
      </div> 
      )
  }
}
CoreValuesCarousel.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query CoreValuesCarouselQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "core-values" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 500)
              html
              id
              frontmatter {
                heading
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CoreValuesCarousel data={data} count={count} />}
  />
)
