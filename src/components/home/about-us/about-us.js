import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

class AboutUs extends React.Component {

  render(){
      const { data } = this.props
      const { edges: posts } = data.allMarkdownRemark

      return (
      <div className="container"> 
        {posts &&
            posts.map(({ node: post }) => (
              <div className="com-cover" key={post.id}>
                <div className="text-center col-md-6 offset-md-3 mb-5">
                <h2 className="com-heading text-black">
                  {post.frontmatter.heading}
                </h2>
                <p>
                  {post.frontmatter.subheading}
                  <br/>
                  <br/>
                  <Link to={post.fields.slug} >Read More </Link>
                </p>
              </div>
            </div>
        ))}
      </div> 
      )
  }
}

AboutUs.propTypes = {
data: PropTypes.shape({
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.array,
  }),
}),
}

export default () => (
  <StaticQuery
    query={graphql`
      query AboutUsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "aboutus-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 120)
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
    render={(data, count) => <AboutUs data={data} count={count} />}
  />
)
