import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {v4} from 'uuid';

import Layout from '../components/home-layout';
import Slideshow from '../components/home/slideshow/slideshow';
import IndustriesCarousel from '../components/home/industries-carousel/industries-carousel';
import ProductsPlatformsGrid from '../components/home/products-platforms-grid/products-platforms-grid';
// import Testimonials from '../components/home/testimonial-carousel/testimonial-carousel';
import Clients from '../components/home/clients/clients';

export const AboutUs = ({about}) => {
  return (
      <div className="container">
        <div className="com-cover">
          <div className="text-center col-md-6 offset-md-3 mb-5">
            <h2 className="com-heading text-black">{about.title}</h2>
            <p>{about.description}</p>
          </div>
        </div>
      </div>
  )
}

export const DigitalEvolution = ({heading, subheading}) => {
  return (
    <div className="container">
        <div className="com-cover">
          <div className="mb-5">
            <h2 className="com-heading text-black">{heading}</h2>
            <p>{subheading}</p>
          </div>
        </div>
    </div>
  )
}

export const Industries = ({industries}) => {
  return (
      <div className="container">
        <div className="com-cover">
          <div className="text-center col-md-6 offset-md-3 mb-5">
            <h2 className="com-heading text-black">{industries.title}</h2>
            <p>{industries.description}</p>
          </div>
          <IndustriesCarousel />
        </div>
      </div>
  )
}

export const ProductsPlatforms = ({productsplatfroms}) => {
  return (
      <div className="container">
        <div className="com-cover">
          <div className="text-center col-md-6 offset-md-3 mb-5">
            <h2 className="com-heading text-black">{productsplatfroms.title}</h2>
            <p>{productsplatfroms.description}</p>
          </div>
          <ProductsPlatformsGrid />
        </div>
      </div>
  )
}

export const JoinUs = ({joinus}) => {
  return (
    <div className="container join-us">
      <div className="row">
        <div className="col-md-6 col-xs-12 joinus-img">
          <img src={require('../images/join-us.jpg')} alt='join us'/>
        </div>

      <div className="col-md-6 col-xs-12 joinus-info-cover text-white">
          <div className="joinus-info">
            <h3 className="com-heading">{joinus.title}</h3>
            <p className="font-weight-normal mb-3">{joinus.description}</p>
            <p>
              <a className="font-weight-normal" href="{joinus.linkurl}">{joinus.linktext}</a>
            </p>
          </div>
      </div>
    </div>
    </div>
  )
}

export const CultureVision = ({culture, vision}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-xs-12 text-white culture-cover">
          <div className="culture">
            <div className="row">
              <div className="col-md-8">
                <h3 className="com-heading">{culture.title}</h3>
                <p className="font-weight-normal">{culture.description}</p>
              </div>
              <div className="col-md-4">
                <img src={require('../images/team-culture.png')} alt='team-culture'/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 text-white vision-cover">
          <div className="vision">
           <div className="row">
            <div className="col-md-8">
                <h3 className="com-heading">{vision.title}</h3>
                <p className="font-weight-normal">{vision.description}</p>
              </div>
              <div className="col-md-4">
                <img src={require('../images/team-vision.png')} alt='team-culture'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonials = ({ testimonials }) => {
  return(
  <div>
    
        <div className="container testimonial-carousel">
          <div className="col-md-6 offset-md-3">
            <h2 className="com-heading text-center text-black mb-3">Trusted by Global Brands</h2>
              <OwlCarousel
              className="owl-theme"
              items={1}
              loop={true}
              dots={true}
              >
                {testimonials.map(testimonial => (
                  <div key={v4()}>
                    <div className="item">
                      <div className="tsml-img float-left">
                        <img src={require("../images/join-us.jpg")} alt="Join Us" />
                      </div>
                      <div className="tsml-info float-left">
                        <p>{testimonial.quote} </p>
                        <p className="tsml-author">{testimonial.author}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
          </div>
        </div>
    
  </div>
  )
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <Slideshow />
      <AboutUs about={frontmatter.about} />
      <DigitalEvolution heading={frontmatter.heading} />
      <div className="bg">
        <Industries industries={frontmatter.industries} />
        <ProductsPlatforms productsplatfroms={frontmatter.productsplatfroms} />
        <div className="com-cover">
          <JoinUs joinus={frontmatter.joinus}/>
          <CultureVision 
            culture={frontmatter.culture}
            vision={frontmatter.vision}
          />
        </div>
      </div>
      {/* <TestimonialCarousel /> */}
      <Testimonials testimonials={frontmatter.testimonials} />
      <Clients />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { title: { eq: "Index Page" } }) {
      frontmatter {
        title
        heading
        subheading
        about {
          title
          description
        }
        industries {
          title
          description
        }
        productsplatfroms {
          title
          description
        }
        joinus {
          title
          description
          linktext
          linkurl
        }
        culture {
          title
          description
        }
        vision {
          title
          description
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`

