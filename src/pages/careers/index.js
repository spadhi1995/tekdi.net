import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layout/baselayout';
import Openingslist from '../../components/careers/careers-accordian'; 
import Banner from '../../components/common/banner/banner';

const CareersIndexPage =  ({data}) => {
  
    const { frontmatter } = data.markdownRemark

    return (
      <Layout>
        <Helmet>
          <title>{frontmatter.title}</title>
          <meta
            name="description"
            content={`${frontmatter.description}`}
          />
        </Helmet>
        <Banner 
          bannerTitle= {frontmatter.bannerTitle} 
          bannerSubTitle = {frontmatter.bannerSubTitle}
        />
        <div className="container py-5">
          <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1 col-xs-12">
            <Openingslist />
          </div>
        </div>
      </Layout>
    )

}

export default CareersIndexPage;

export const pageQuery = graphql`
  query CareersBanner {
    markdownRemark(frontmatter: { templateKey: { eq: "careers-banner" }}) {
      frontmatter {
        title
        description
        bannerTitle
        bannerSubTitle
      }
    }
  }
`