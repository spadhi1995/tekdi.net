
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import lodash from "lodash"
import './blog-cat-list.scss';
class BlogTagList extends React.Component { 
  render() {
    const { data } = this.props
    const { tagsGroup } = data
    return (
     <div className="bg-white p-4 list-cover">
      <h3 className="text-black mod-title mb-3 pb-3">Tags</h3>
      <ul className="tag-list unstyled"> 
          {tagsGroup.group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to = {"blog/tags/" + lodash.kebabCase(tag.fieldValue)}>
                {tag.fieldValue}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )}
}

BlogTagList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogTagListQuery {
      tagsGroup: allMarkdownRemark(limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }) {
        group(field: frontmatter___tags) {
          fieldValue
      		totalCount
        }
      }
    }
    `}
    render={(data, count) => <BlogTagList data={data} count={count} />}
  />
)