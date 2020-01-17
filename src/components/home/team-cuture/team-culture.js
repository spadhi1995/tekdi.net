import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../../preview-compatible-image';

class TeamCulture extends React.Component {

  render(){
      const { data } = this.props
      const { edges: posts } = data.allMarkdownRemark

      return (
      <Fragment> 
        {posts &&
            posts.map(({ node: post }) => (
            <div className="col-md-6 col-xs-12 text-white culture-cover" key={post.id}>
              <div className="culture">
                <div className="row">
                  <div className="col-md-8">
                    <h3 className="com-heading">{post.frontmatter.heading}</h3>
                    <p className="font-weight-normal">{post.frontmatter.subheading}</p>
                    {/* <Link to={post.fields.slug} >Read More </Link> */}
                  </div>
                  <div className="col-md-4">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.img,
                        alt: `icon for ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
        ))}
      </Fragment> 
      )
  }
}

TeamCulture.propTypes = {
data: PropTypes.shape({
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.array,
  }),
}),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TeamCultureQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "team-page" } } }
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
                img {
                  childImageSharp {
                    fluid(maxWidth: 130, quality: 100) {
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
    render={(data, count) => <TeamCulture data={data} count={count} />}
  />
)
