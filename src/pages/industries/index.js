import React from 'react'

import Layout from '../../components/layout/baselayout';
import IndustriesList from '../../components/industries/industrieslist'; 
import Banner from "../../components/common/banner/banner"

export default class IndustriesIndexPage extends React.Component {
  render() {
    const Banners = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
         <Banner bannerTitle= {Banners.bannerTitle}/>
        <div className="pt-5 industries">
          <IndustriesList />
        </div>
      </Layout>
    )
  }
}
export const pageQuery = graphql`
  query IndustriesBanner {
    markdownRemark(frontmatter: { templateKey: { eq: "industries-banner" }}) {
      frontmatter {
        bannerTitle
      }
    }
  }
`
