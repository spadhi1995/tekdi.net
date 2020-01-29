import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import './case-studies-list.scss';


class CaseStudiesList extends React.Component {
  render(){
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return(
      <div className="case-studies-list">
        <h4 className="mod-title font-weight-bold">View Case Studies</h4>
        {posts &&
        posts.map(({ node: post }) => (
          <div className="item" key={post.id}>
            <Link to={post.fields.slug}>
              <h4 className="font-weight-bold text-black mb-3">{post.frontmatter.heading}</h4>
            </Link>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    )
  }
}
export default () => (
  <StaticQuery
    query={graphql`
      query CaseStudiesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "case-study" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 70)
              id
              fields {
                slug
              }
              frontmatter {
               heading
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CaseStudiesList data={data} count={count} />}
  />
)
