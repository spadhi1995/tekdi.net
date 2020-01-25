import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../common/preview-compatible-image';

class IndustriesList extends React.Component {
    
    render(){
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
        <div className="container"> 
            <div className="industries-list">
                  {posts &&
                      posts.map(({ node: post }) => (
                      <div className="row" key={post.id}>
                          <div className="col-md-4 col-sm-5 col-xs-12">
                            <div className="icon">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: post.frontmatter.icon,
                                  alt: `icon for ${post.frontmatter.title}`,
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-8 col-sm-7 col-xs-12">
                            <h3 className="section-title mt-4 mb-2">{post.frontmatter.title}</h3>
                            <p className="font-weight-normal">
                              {post.excerpt}
                              <br/>
                              <br/>
                              <Link to={post.fields.slug} className="font-weight-bold">View More </Link>
                            </p>
                          </div>
                      </div>
                  ))}
            </div>
        </div> 
        )
    }
}

IndustriesList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
    <StaticQuery
      query={graphql`
        query IndustriesListQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "industries-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 200)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  heading
                  subheading
                  icon {
                    childImageSharp {
                      fluid(maxWidth: 60, quality: 100) {
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
      render={(data, count) => <IndustriesList data={data} count={count} />}
    />
  )
  