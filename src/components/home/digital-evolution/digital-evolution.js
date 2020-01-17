import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../../preview-compatible-image';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './digital-evolution.css'

class DigitalEvolution extends React.Component {
  
    state= {
        responsive:{},
    }
    componentDidMount(){
        const desktop = this.props.desktop ? this.props.desktop : 3;
        const tablet = this.props.tablet ? this.props.tablet : 2;
        const mobile = this.props.mobile ? this.props.mobile : 1;
        this.setState({
            responsive:{
                0: {
                    items: mobile,
                },
                768: {
                    items: tablet,
                },
                992:{
                    item: desktop
                }
            }
        })
    }
    render() {
      const { data } = this.props
      const { edges: posts } = data.allMarkdownRemark

      const column = this.props.column ? this.props.column : 3;
      const loop = this.props.loop === false ? this.props.loop : true;
      const nav = this.props.nav === false ? this.props.nav : true;

      return ( 
          <div className="container"> 
            <div className="digital-evolution">
                <div>
              {posts &&
              posts.map(({ node: post }) => (
                <div key={post.id} className="">
                  <div className="">
                    {post.frontmatter.bgimage ? (
                        <div className="">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.bgimage,
                              alt: `image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </div>
                      ) : null}
                      <h4 className="">
                        <Link to={post.fields.slug} className="text-decoration-none">{post.frontmatter.heading}</Link>
                      </h4>
                    </div>
                </div>
              ))}
              </div>
          </div>
        </div>
    )
  }
}

DigitalEvolution.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query DigitalEvolutionQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "digital-evolution" } } }
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
    render={(data, count) => <DigitalEvolution data={data} count={count} />}
  />
)
