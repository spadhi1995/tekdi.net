import React from "react"
import lodash from "lodash"
import { Link } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'
const renderList = ({ node }) => {
  return (
<div> 
     <div className="blog-list mb-5 pb-5" key={node.fields.id}>
      <div
        className={`row ${
          node.frontmatter.featuredpost ? 'is-featured' : ''
        }`}
      >
        <div className="col-md-3 col-sm-4 col-xs-12">
          {node.frontmatter.featuredimage ? (
            <div className="featured-thumbnail">
              <PreviewCompatibleImage
                imageInfo={{
                  image: node.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${node.frontmatter.title}`,
                }}
              />
            </div>
          ) : null}
          </div>
          <div className="col-md-9 col-sm-8 col-xs-12 blog-info">
            <h3 className="blog-title">
              <Link to={node.fields.slug} >
                {node.frontmatter.title}
              </Link>
            </h3>
            <ul className="unstyled mb-4">
              <li className="blog-author mr-4">
                By <span className="author-name text-black">{node.frontmatter.author}</span>
              </li>
              <li className="blog-date mr-4">
                On <span className="text-black">{node.frontmatter.date}</span>
              </li>
              <li className="blog-category">
                In <Link to= {"blog/" + lodash.kebabCase(node.frontmatter.category)}>{node.frontmatter.category.join(" ")}</Link>
              </li>
            </ul>
            <p>
              {node.excerpt}
              <br />
              <br />
              <Link to={node.fields.slug}>
                Keep Reading
              </Link>
            </p>
          </div>
      </div>
    </div> 
</div> 
)}

export default renderList