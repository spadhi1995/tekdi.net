import React from 'react'

import Layout from '../../components/layout';
import Openingslist from '../../components/careers-accordian'; 
import '../../components/css/careers.css';

export default class CareersIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="banner">
          <div className="container">
            <div className="banner-text">
              <p className="text-white font-weight-normal"></p>
              <h1 className="text-white">careers</h1>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div class="row">
            <div className="col-md-8 col-xs-12 offset-md-2">
              <Openingslist />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
