import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../common/preview-compatible-image';
import './digital-evolution-list.scss';

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
      <div className="digital-evolution-list">
        {posts &&
        posts.map(({ node: post }) => (
          this.boxId !== post.fields.slug.match(/\/([^\/]+)\/?$/)[1] ? (
          <div key={post.id} className="box-cover p-0">
            <div className="box position-relative">
              {post.frontmatter.bgimage ? (
                  <div className="bg-image">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.bgimage,
                        alt: `image thumbnail for post ${post.frontmatter.heading}`,
                      }}
                    />
                  </div>
              ) : null}
              <div className="text position-absolute">
                <h4 className="mb-2">
                  {post.frontmatter.heading}
                </h4>
                <Link to={post.fields.slug} className="text-decoration-none">
                  <img src={require('./images/readmore-white.png')} alt="read more"/>
                </Link>
              </div>
            </div>
          </div>
          ) : null
        ))}
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
                heading
                bgimage {
                  childImageSharp {
                    fluid(maxWidth: 250, maxHeight: 200, quality: 100) {
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