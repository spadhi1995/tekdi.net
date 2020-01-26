import React from 'react'
import Layout from '../../components/layout/baselayout';
import Openingslist from '../../components/careers/careers-accordian'; 
import Banner from '../../components/common/banner/banner';

export default class CareersIndexPage extends React.Component {
  render() {
    const Banners = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <Banner 
          bannerTitle= {Banners.bannerTitle} 
          bannerSubTitle = {Banners.bannerSubTitle}
        />
        <div className="container py-5">
          <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1 col-xs-12">
            <Openingslist />
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query CareersBanner {
    markdownRemark(frontmatter: { templateKey: { eq: "careers-banner" }}) {
      frontmatter {
        bannerTitle
        bannerSubTitle
      }
    }
  }
`