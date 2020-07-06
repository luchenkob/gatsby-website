import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SpecialImage from '../components/SpecialImage';

import image from '../images/travel/png/image@3x.png';
import image2 from '../images/travel/png/image-2@3x.png';

import BackgroundImage from 'gatsby-background-image'

function TravelPage() {
  const { mobileImage, desktopImage } = 
    useStaticQuery(graphql`
      query {
        mobileImage: file(relativePath: { eq: "travel/png/image-main@3x.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "travel/png/image-main.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Travel'
      />

      <section className='text-center'>
      <BackgroundImage Tag={`section`} id={`media-test`} fluid={sources} style={{
          backgroundPosition: 'top'
        }}>
        <Hero>
          <div className='-mt-12 flex flex-col justify-center h-full'>
            <h1>
              Web & App-Based Travel
              and Hospitality Solutions
            </h1>
            <p className='lg:mt-10'>for corporate travel and employee privileges</p>
          </div>
        </Hero>
        </BackgroundImage>

        <section className='mt-12 mx-auto w-11/12'>
          <h2 className='md:text-3xl'>We built travel platforms that allow companies to reduce cost</h2>
          <p className='mt-6 max-w-3xl mx-auto'>
            Our travel platform is used by companies looking to lower their
            bottom line as well as reward their employees. By accessing our
            system for corporate travel or providing employees with memberships,
            you can reduce your costs and increase employee retention.
          </p>
        </section>

        <section className='mt-10 text-left flex flex-col md:flex-row max-w-4xl mx-auto'>
          <div className='mx-auto mt-2 text-left w-11/12 md:w-1/2 md:max-w-xs lg:max-w-sm md:self-center md:mt-0'>
            <h5>Supply fulfillment for travel clubs</h5>
            <p className='mt-4'>
              We provide travel clubs around the world with an unparalleled
              technology and fulfillment service. Members have access to
              incredible online travel savings and a team of professionally
              trained Travel Concierges.
            </p>
          </div>
          <img
            className='block mt-6 w-screen md:w-1/2'
            src={image}
            alt='Woman on a boat standing with her arms open towards the sea'
          />
        </section>

        <section className='mt-12 text-left md:flex md:mt-52 md:flex-row-reverse max-w-4xl mx-auto'>
          <div className='mt-10 mx-auto w-11/12 md:w-1/2 md:max-w-xs lg:max-w-sm md:self-center md:mt-0 md:ml-12 md:mr-0'>
            <h5>Loyalty rewards programs</h5>
            <p className='mt-4'>
              With our dynamic Loyalty Rewards Program your members will see
              immediate benefits from using your product. By being directly
              rewarded for every purchase made, your members will develop
              loyalty to your program and stay with you year after year.
            </p>
          </div>
          <div className='mt-6 md:w-1/2 md:mt-0'>
            <SpecialImage
              imgSrc={image2}
              imgAlt='Woman on the beach in a hammock smiling at her phone'
              bubbleSide='right'
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default TravelPage;
