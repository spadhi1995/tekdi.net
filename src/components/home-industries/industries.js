import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import IndustriesCarousel from './industries-carousel';

class Industries extends React.Component {
    
    render(){
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
        <div className="container">
          <div className="com-cover"> 
            {posts &&
                posts.map(({ node: post }) => (
                <div className="text-center col-md-6 offset-md-3 mb-5" key={post.id}>
                  <h2 className="com-heading text-black">{post.frontmatter.heading}</h2>
                  <p>{post.frontmatter.subheading}</p>
                </div>
            ))}
            <IndustriesCarousel />
          </div>
        </div> 
        )
    }
}

Industries.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
    <StaticQuery
      query={graphql`
        query IndustriesQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "home-industries" } } }
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
      render={(data, count) => <Industries data={data} count={count} />}
    />
  )
  