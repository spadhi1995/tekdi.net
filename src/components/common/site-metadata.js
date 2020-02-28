import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import favicon from '../../../static/img/favicon/favicon-32x32.png'

const SEO = props => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const title = props.title || data.site.siteMetadata.title;
      const metakeywords = props.metakeywords
      const metadescription = props.metadescription
      const ogimage = props.ogimage

      var url =  typeof window !== 'undefined' ? window.location.pathname : '';
      
      return (
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
          title={title}
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
        <html lang="en" />

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
        <meta name="description" content={metadescription} />
        <meta name="keywords" content={metakeywords} />
        <meta name="theme-color" content="#089add" />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content=""/>
        <meta name="twitter:description" content={metadescription}/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metadescription} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogimage} />
      </Helmet>
      );
    }}
  />
);

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title 
        description
      }
    }
  }
`;