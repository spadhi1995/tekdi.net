import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../../preview-compatible-image';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './digital-evolution.css'

class DigitalEvolution extends React.Component {
  
    
    render() {
      const { data } = this.props
      const { edges: posts } = data.allMarkdownRemark

      const params = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bullets: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 2,
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
      };
      return ( 
          <div className="container-fluid bg-lightgrey"> 
            <div className="digital-evolution com-cover">
              <Swiper {...params}>
              {posts &&
              posts.map(({ node: post }) => (
                <div key={post.id} className="row">
                  <div className="col-md-5">
                    {post.frontmatter.bgimage ? (
                      <div className="">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.bgimage,
                            alt: `image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div className="col-md-7">
                    <h3 className="text-black font-weight-bold">{post.frontmatter.heading}</h3>
                    <p className="font-weight-normal">
                      {post.excerpt}
                      <br/>
                      <br/>
                      {/* <Link to={post.fields.slug} className="text-decoration-none">{post.frontmatter.heading}</Link> */}
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

DigitalEvolution.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query DigitalEvolutionQuery {
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
                title
                featured
                templateKey
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
    render={(data, count) => <DigitalEvolution data={data} count={count} />}
  />
)
