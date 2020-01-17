import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import './common.css';
import './all.sass';

const HomeWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className="home">
       <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon/favicon-16x16.png`}
          sizes="16x16"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/tekdi-logo.png`}
        />
      </Helmet>
      <Header />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default HomeWrapper
