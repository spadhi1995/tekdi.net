
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import lodash from "lodash"
import './blog-cat-list.scss';
class BlogCatList extends React.Component { 
  render() {
    const { data } = this.props
    const { categoryGroup } = data
    return (
      <div className="bg-white p-4 list-cover mb-3">
        <h3 className="text-black mod-title mb-3 pb-3">Categories</h3>
        <ul className="blog-cat-list unstyled">
          {categoryGroup.group.map(category => (
          <li key={category.fieldValue}>
            <Link to = {"blog/" + lodash.kebabCase(category.fieldValue)}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
        </ul>
      </div>
  )}
}

BlogCatList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogCategoryListQuery {
    categoryGroup: allMarkdownRemark(limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { templateKey: { eq: "blog-post" } } }) {
        group(field: frontmatter___category) {
          fieldValue
        	totalCount
        }
      }
    }
    `}
    render={(data, count) => <BlogCatList data={data} count={count} />}
  />
)