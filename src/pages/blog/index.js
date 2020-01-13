import React from 'react'

import Layout from '../../components/layout';
import BlogList from '../../components/bloglist'; 

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="banner">
          <div className="container">
            <div className="banner-text">
              <p className="text-white font-weight-normal">Latest Reads</p>
              <h1 className="text-white">Blog</h1>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8">
              <BlogList />
            </div>
            <div className="col-md-4">
              
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
