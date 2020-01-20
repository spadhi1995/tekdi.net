import React from 'react';
import PropTypes from 'prop-types';
import { Link,graphql } from 'gatsby';

import Layout from '../components/home-layout';
import Slideshow from '../components/home/slideshow/slideshow';
import AboutUs from '../components/home/about-us/about-us';
import IndustriesCarousel from '../components/home/industries-carousel/industries-carousel';
import ProductsPlatformsGrid from '../components/home/products-platforms-grid/products-platforms-grid';
import Clients from '../components/home/clients/clients';
import DigitalEvolution from '../components/home/digital-evolution/digital-evolution';
import TeamCulture from '../components/home/team-cuture/team-culture';
import Vision from '../components/home/vision/vision';
import TestimonialCarousel from '../components/home/testimonial-carousel/testimonial-carousel';

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
              <Link to={'/careers'} className="font-weight-normal">{joinus.linktext}</Link>
            </p>
          </div>
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
      <AboutUs />
      <DigitalEvolution />
      <div className="bg">
        <Industries industries={frontmatter.industries} />
        <ProductsPlatforms productsplatfroms={frontmatter.productsplatfroms} />
        <div className="com-cover">
          <JoinUs joinus={frontmatter.joinus}/>
          <div className="container">
            <div className="row">
              <TeamCulture/>
              <Vision />
            </div>
          </div>
        </div>
      </div>
      <TestimonialCarousel />
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

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { title: { eq: "Index Page" } }) {
      frontmatter {
        title
        heading
        subheading
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
        }
      }
    }
  }
`

