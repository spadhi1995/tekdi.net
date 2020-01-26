import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import './digital-evolution.scss';
import PreviewCompatibleImage from '../common/preview-compatible-image';

class DigitalEvolutionList extends React.Component {
  constructor(props) {
    super(props)
    var url =  typeof window !== 'undefined' ? window.location.href : '';
    if(url)
     {
        this.boxId = url.match(/\/([^\/]+)\/?$/)[1];
     }
     else
     {
        this.boxId = "";
     }
  }
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
        <div className="container-fluid">
          <div className="row">
            {posts &&
            posts.map(({ node: post }) => (
              this.boxId !== post.fields.slug.match(/\/([^\/]+)\/?$/)[1] ? (
              <div key={post.id} className="col-md-2 p-0">
                <div className="box">
                  {post.frontmatter.bgimage ? (
                      <div className="bg-image">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.bgimage,
                            alt: `image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <h4 className="position-absolute">
                      <Link to={post.fields.slug} className="text-decoration-none">{post.frontmatter.heading}</Link>
                    </h4>
                  </div>
              </div>
                ) : null
            ))}
          </div>
       </div>
    )
  }
}
DigitalEvolutionList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
export default () => (
  <StaticQuery
    query={graphql`
      query DigitalEvolutionListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "digital-evolution" } },
        }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
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
    render={(data, count) => <DigitalEvolutionList data={data} count={count} divId/>}
  />
)