import React, { Fragment } from 'react'

import Layout from '../../components/layout';
import DigitalEvolutionList from '../../components/digitalevolution'; 
import Banner from "../../components/banner/banner"

export const Custom = () => {
  return (
    <Fragment>
    <div className="container">
      <div className="row my-5">
        <div className="col-sm-5 col-xs-12 info-img">
          <img src={require("../../images/join-us.jpg")} alt="Join Us" />
        </div>
        <div className="col-sm-7 col-xs-12 info">
          <h4 className="text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
        </div>
      </div>
    </div>
    <div className="bg-lightgrey">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-xs-12 info">
            <h4 className="text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
          </div>
          <div className="col-sm-5 col-xs-12 info-img">
            <img src={require("../../images/join-us.jpg")} alt="Join Us" />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row my-2">
        <div className="col-md-10 col-xs-12 offset-md-1 info">
          <h4 className="text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default class DigitalEvolutionIndexPage extends React.Component {
  render() {
    const Banners = this.props.data.markdownRemark.frontmatter
    return (
      <Layout>
         <Banner bannerTitle= {Banners.bannerTitle} />
        <div className="pt-5 digital-evolution">
          <Custom />
          <DigitalEvolutionList />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query digitalEvolutionBanner {
    markdownRemark(frontmatter: { templateKey: { eq: "digital-evolution-banner" }}) {
      frontmatter {
        bannerTitle
        bannerSubTitle
      }
    }
  }
`