import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import DigitalEvolutionCarousel from './digital-evolution-carousel';
import './digital-evolution.scss'

class DigitalEvolution extends React.Component {
  
    
    render() {
      const { data } = this.props
      const { edges: posts } = data.allMarkdownRemark

      return ( 
        <div className="bg-lightgrey container-fluid"> 
          <div className="com-cover">
            <div className="container">
              {posts &&
              posts.map(({ node: post }) => (
                <div key={post.id} className="row mb-5 digital-evolution">
                  <div className="col-md-5 offset-md-1">
                    <h2 className="com-heading text-black">
                      {post.frontmatter.heading}
                    </h2>
                    <p>
                      {post.frontmatter.subheading}
                    </p>
                  </div>
                </div>
              ))}
              </div>
              <DigitalEvolutionCarousel /> 
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
          filter: { frontmatter: { templateKey: { eq: "home-digital-evolution" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 150)
              id
              fields {
                slug
              }
              frontmatter {
                heading
                subheading
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <DigitalEvolution data={data} count={count} />}
  />
)
