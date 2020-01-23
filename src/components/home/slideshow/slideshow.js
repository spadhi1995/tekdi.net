import React from "react"
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../../preview-compatible-image';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import "./slideshow.css";


// class Slideshow extends React.Component {
//     render () {
//         const params = {
//             pagination: {
//               el: '.swiper-pagination',
//               clickable: true,
//               bullets: true,
//             },
//             grabCursor: true,
//             loop:true
//           }
      
//         return (
//             <div className="slideshow">
//                 <div className="container">
//                     <Swiper {...params}> 
                        
//                         <div className="carousel-items">
//                             <div className="row mb-3">
//                             <h3 className="col-sm-7 col-xs-12 carousel-desc">Digital Solution and Data Analytics for an Efficient Framework and Better Customer Experience</h3>
//                             <div className="col-sm-5 col-xs-12">
//                                 <img src={require('./images/slideshow.png')} alt="slideshow" className="img-responsive"/>
//                             </div>
//                             </div>
//                         </div>
                    
//                         <div className="carousel-items">
//                             <div className="row">
//                             <h3 className="col-sm-7 col-xs-12 carousel-desc">Digital Solution and Data Analytics for an Efficient Framework and Better Customer Experience</h3>
//                             <div className="col-sm-5 col-xs-12">
//                                 <img src={require('./images/slideshow.png')} alt="slideshow" className="img-responsive"/>
//                             </div>
//                             </div>
//                         </div>
                        
//                         <div className="carousel-items">
//                             <div className="row">
//                             <h3 className="col-sm-7 col-xs-12 carousel-desc">Digital Solution and Data Analytics for an Efficient Framework and Better Customer Experience</h3>
//                             <div className="col-sm-5 col-xs-12">
//                                 <img src={require('./images/slideshow.png')} alt="slideshow" className="img-responsive"/>
//                             </div>
//                             </div>
//                         </div>
                        
//                     </Swiper>
//                 </div>
//             </div>
//         );
//     }
// }
class Slideshow extends React.Component {

    render(){
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark

        const params = {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                bullets: true,
            },
            grabCursor: true,
            loop:true
        }          
  
        return (
            <div className="slideshow">
                <div className="container"> 
                    <Swiper {...params}> 
                        {posts &&
                        posts.map(({ node: post }) => (
                        <div className="carousel-items" key={post.id}>
                            <div className="row mb-3">
                                <h3 className="col-sm-7 col-xs-12 carousel-desc">
                                    {post.frontmatter.heading}
                                </h3>
                                <div className="col-sm-5 col-xs-12">
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image: post.frontmatter.img,
                                    alt: `featured image thumbnail for post ${post.frontmatter.alt}`,
                                  }}
                                />
                                </div>
                            </div>
                        </div>
                        ))}
                    </Swiper>
                </div>
            </div>
        )
    }
};

export default () => (
    <StaticQuery
      query={graphql`
        query SlideshowQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "slideshow" } } }
          ) {
            edges {
              node {
                frontmatter {
                  heading
                  alt
                  img {
                    childImageSharp {
                      fluid(quality: 100) {
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
      render={(data, count) => <Slideshow data={data} count={count} />}
    />
  )