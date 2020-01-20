import React from 'react'

import Layout from '../../components/layout';
import IndustriesList from '../../components/industrieslist'; 

export default class IndustriesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="banner">
          <div className="container">
            <div className="banner-text">
              <h1 className="text-white">Industries</h1>
            </div>
          </div>
        </div>
        <div className="pt-5 industries">
          <IndustriesList />
        </div>
      </Layout>
    )
  }
}
