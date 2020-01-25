import React from 'react';

import Layout from '../components/layout/baselayout';
import Slideshow from '../components/slideshow/slideshow';
import AboutUs from '../components/home-about-us/about-us';
import Industries from '../components/home-industries/industries';
import DigitalEvolution from '../components/home-digital-evolution/digital-evolution';
import ProductsPlatforms from '../components/home-products-platforms/products-platforms';
import JoinUs from '../components/home-join-us/join-us';
import TeamCulture from '../components/home-team-culture/team-culture';
import Vision from '../components/home-vision/vision';
import TestimonialCarousel from '../components/home-testimonial-carousel/testimonial-carousel';
import Clients from '../components/home-clients/clients';
import ContactUs from '../components/home-contact/contact';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Slideshow />
      <AboutUs />
      <DigitalEvolution />
      <div className="bg">
        <Industries />
        <ProductsPlatforms />
        <div className="com-cover">
          <JoinUs />
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
      <ContactUs />
    </Layout>
  )
}

export default IndexPage;