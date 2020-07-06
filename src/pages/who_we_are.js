import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

import image from '../images/who_we_are/png/image@3x.png';

import SpecialImage from '../components/SpecialImage';
import GraySection from '../components/GraySection';

import BackgroundImage from 'gatsby-background-image';

function WhoWeArePage() {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(
        relativePath: { eq: "who_we_are/png/image-main@3x.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(
        relativePath: { eq: "who_we_are/png/image-main.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

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
        title='Who We Are'
      />

      <section className='text-center'>
        <BackgroundImage
          Tag={`section`}
          id={`media-test`}
          fluid={sources}
          style={{
            backgroundPosition: 'top',
          }}
        >
          <Hero>
            <div className='-mt-12 flex flex-col justify-center h-full lg:justify-start lg:mt-0'>
              <h1 className='lg:mt-202 lg:w-545'>
                Innovation
                <br />
                is in our DNA
              </h1>
            </div>
          </Hero>
        </BackgroundImage>

        <div className='lg:hidden  block'>
          <GraySection
            text='Meliorism is a premier all-in-one technology solutions provider with
          a focus on delivering world-class, custom technology platforms that
          cater to the travel, online learning, and e-commerce transportation
          industries. Our sole aim is to provide cost-effective technology
          services.'
            secondText='Our team has a relentless focus on delivering scalable and reliable
          technology platforms, which can be the growth engine for aspiring
          digital companies.'
          >
            <SpecialImage
              imgSrc={image}
              imgAlt='Woman on her phone smiling sitting in a cafe'
              bubbleSide='right'
            />
          </GraySection>
        </div>

        <div className='hidden  lg:block lg:mt-270'>
          <GraySection
            text='Meliorism is a premier all-in-one technology solutions provider with
          a focus on delivering world-class, custom technology platforms that
          cater to the travel, online learning, and e-commerce transportation
          industries. Our sole aim is to provide cost-effective technology
          services.'
            secondText='Our team has a relentless focus on delivering scalable and reliable
          technology platforms, which can be the growth engine for aspiring
          digital companies.'
            childOnRight={false}
            widthOfText='580'
          >
            <SpecialImage
              imgSrc={image}
              imgAlt='Woman on her phone smiling sitting in a cafe'
              bubbleSide='right'
            />
          </GraySection>
        </div>
      </section>
    </Layout>
  );
}

export default WhoWeArePage;
