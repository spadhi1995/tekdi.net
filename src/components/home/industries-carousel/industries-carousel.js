import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../../preview-compatible-image';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './industries-carousel.css';

class IndustriesCarousel extends React.Component {
    state= {
        responsive:{},
    }
    componentDidMount(){
        const desktop = this.props.desktop ? this.props.desktop : 4;
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
    render(){
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        const column = this.props.column ? this.props.column : 4;
        const loop = this.props.loop === false ? this.props.loop : true;
        const nav = this.props.nav === false ? this.props.nav : true;

        return (
        <div className="container"> 
            <div className="industries-carousel">
                <div>
                    {posts &&
                        posts.map(({ node: post }) => (
                        <div className="item" key={post.id}>
                            <div className="item-inner blue-bg">
                              <div className="icon">
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image: post.frontmatter.icon,
                                    alt: `icon for ${post.frontmatter.title}`,
                                  }}
                                />
                              </div>
                              <h3 className="section-title mt-4 mb-2">{post.frontmatter.title}</h3>
                              <p>
                                {post.excerpt}
                                <br/>
                                <br/>
                                <Link to={post.fields.slug} >View More </Link>
                              </p>
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
        </div> 
        )
    }
}

IndustriesCarousel.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
    <StaticQuery
      query={graphql`
        query IndustriesCarouselQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "industries-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 120)
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
      render={(data, count) => <IndustriesCarousel data={data} count={count} />}
    />
  )
  