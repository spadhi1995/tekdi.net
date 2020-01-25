import React from 'react'
import Layout from '../../components/layout/baselayout';
import ProductList from '../../components/products-platforms/productlist'; 
import Banner from "../../components/common/banner/banner"

export default class ProductsIndexPage extends React.Component {
  render() {
    const Banners = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
        <Banner bannerTitle= {Banners.bannerTitle} bannerSubTitle = {Banners.bannerSubTitle}/>
        <div className="container py-5">
          <ProductList />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query productsPage {
    markdownRemark(frontmatter: { templateKey: { eq: "products-banner" }}) {
      frontmatter {
        bannerTitle
        bannerSubTitle
      }
    }
  }
`