import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Layout from '../components/layout';
import '../components/css/careers.css';
import {v4} from 'uuid';

export const Openings = ({ positions }) => {
  return (
      <div className="container py-5 careers">
        <div className="row">
          <div className="col-md-8 col-xs-12 offset-md-2">
            <h1 className="text-center text-black mb-5">Current Openings</h1>
            {positions.map(position => (
                <Fragment key={v4()}>
                  <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <h3 className="text-black">{position.heading}</h3>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <ul className="unstyled mb-4">
                              <li className="mr-4">Type <span className="text-black">{position.type}</span></li>
                              <li>Location <span className="text-black">{position.location}</span></li>
                            </ul>
                            <p>
                                {position.description}
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                </Fragment>
            ))}
          </div>
        </div>
       </div>
  );
}

const CareersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <div className="banner">
          <div className="container">
            <div className="banner-text">
              <p className="text-white font-weight-normal">Work with Us</p>
              <h1 className="text-white">Careers</h1>
            </div>
          </div>
        </div>
      <Openings positions={frontmatter.positions} />
    </Layout>
  )
}

export default CareersPage;

CareersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query CareersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "careers-page" } }) {
      frontmatter {
          title
          positions {
            heading
            type
            location
            description
          }
      }
    }
  }
`

