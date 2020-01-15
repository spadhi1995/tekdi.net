import React from 'react'

import Layout from '../../components/layout';
import ProductList from '../../components/productlist'; 

export default class ProductsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="banner">
          <div className="container">
            <div className="banner-text">
              <p className="text-white font-weight-normal">Products & Platforms</p>
              <h1 className="text-white">E-Learning</h1>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <ProductList />
        </div>
      </Layout>
    )
  }
}
