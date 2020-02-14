import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import './case-studies-list.scss';
import lodash from "lodash"
import CaseStudyModal from "../modal/case-study-modal"
class CaseStudiesList extends React.Component {

  render(){
    const { data } = this.props
    const { caseStudyTag } = this.props
    const { tagsGroup } = data
    //let modal = true;
   
    return(
      <div>
      <div className="case-studies-list">
        <h4 className="mod-title font-weight-bold">View Case Studies</h4>
        {caseStudyTag &&
        
          tagsGroup.group.map(tag => ( 
          lodash.kebabCase(caseStudyTag) ===  lodash.kebabCase(tag.fieldValue)  ? (
            tag.edges.map(({ node: post }) => (
          <div className="item" key={post.id}> 
            <Link to={post.fields.slug}>
          {/* <h4 className="font-weight-bold text-black mb-3">{post.frontmatter.heading}</h4> */}
            </Link>
            <CaseStudyModal slug={post.fields.slug} caseStudyName={post.frontmatter.heading} />
            <p>{post.excerpt}</p> 
          </div>
           ))
          ) : null
          ))
       }
       
      </div>
     
      </div>
      
    )
  }
}



export default props => (
  <StaticQuery
    query={graphql`
      query CaseStudiesListQuery {
      tagsGroup: allMarkdownRemark(limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { templateKey: { eq: "case-study" } } }) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
          edges {
            node {
              excerpt(pruneLength: 70)
              id
              fields {
                slug
              }
              frontmatter {
               heading
               tags
              }
            }
          }   
        }
      }
    } 
  `}
    render={(data, count) => <CaseStudiesList data={data} count={count} caseStudyTag={props.caseStudyTag}  />}
  />
)
