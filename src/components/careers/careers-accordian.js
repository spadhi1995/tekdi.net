import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './careers.scss';

class Openingslist extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Accordion>
        {posts &&
          posts.map(({ node: post }) => (
            <AccordionItem key={post.id}>
              <AccordionItemHeading>
                  <AccordionItemButton>
                      <h3 className="text-black">{post.frontmatter.heading}</h3>
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <ul className="unstyled mb-4">
                    <li className="mr-4">Type <span className="text-black">{post.frontmatter.type}</span></li>
                    <li>Location <span className="text-black">{post.frontmatter.location}</span></li>
                  </ul>
                  <p>
                      {post.frontmatter.subheading}
                  </p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
     </Accordion>
    )
  }
}

Openingslist.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query OpeningslistQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "positions" } } }
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
                type
                location
                subheading
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Openingslist data={data} count={count} />}
  />
)
