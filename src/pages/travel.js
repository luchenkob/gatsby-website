import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SpecialImage from '../components/SpecialImage';

import BackgroundImage from 'gatsby-background-image';

function TravelPage() {
  const { prismic } = useStaticQuery(graphql`
    query {
      prismic {
        travel_page(lang: "en-us", uid: "travel-page") {
          heading
          text
          background_mobile
          background_mobileSharp {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          background_desktop
          background_desktopSharp {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          section_1_heading
          section_1_text
          section_2_heading
          section_2_text
          section_2_image
          section_2_imageSharp {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          section_3_heading
          section_3_text
          section_3_image
          section_3_imageSharp {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const document = prismic.travel_page;

  const { hero, section1, section2, section3 } = {
    hero: {
      heading: document.heading,
      text: document.text,
    },
    section1: {
      heading: document.section_1_heading,
      text: document.section_1_text,
    },
    section2: {
      heading: document.section_2_heading,
      text: document.section_2_text,
      fluidImage: document.section_2_imageSharp.childImageSharp.fluid,
      imageAlt: document.section_2_image.alt,
    },
    section3: {
      heading: document.section_3_heading,
      text: document.section_3_text,
      fluidImage: document.section_3_imageSharp.childImageSharp.fluid,
      imageAlt: document.section_2_image.alt,
    },
  };

  const sources = [
    document.background_mobileSharp.childImageSharp.fluid,
    {
      ...document.background_desktopSharp.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Layout>
      <SEO keywords={[`gatsby`, `react`]} title='Travel' />

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
              <div className='lg:w-916 lg:mt-168'>
                {RichText.render(hero.heading)}
              </div>
              <p className='mt-6 lg:mt-10 lg:w-800'>
                {RichText.asText(hero.text)}
              </p>
            </div>
          </Hero>
        </BackgroundImage>

        <section className='mt-12 mx-auto lg:mt-40 xl:w-1260'>
          {RichText.render(section1.heading)}
          <p className='mt-6  mx-auto lg:mt-10'>
            {RichText.asText(section1.text)}
          </p>
        </section>

        <section className='mx-auto  mt-10 text-left flex flex-col lg:flex-row lg:mt-104 xl:w-1260 lg:h-400'>
          <div className='mx-auto text-left w-11/12 lg:ml-12 xl:ml-0 lg:w-1/2 lg:self-center lg:mr-100'>
            <h5>{RichText.asText(section2.heading)}</h5>
            <div className='mt-2 lg:mt-4 space-y-4'>
              {RichText.render(section2.text)}
            </div>
          </div>
          <div className='lg:w-1/2'>
            <Img
              className='block mt-6 w-screen lg:w-full lg:h-full'
              fluid={section2.fluidImage}
              alt={section2.imageAlt}
            />
          </div>
        </section>

        <section className='mt-12 text-left mx-auto lg:flex lg:flex-row-reverse lg:mt-104 lg:w-1260 lg:h-400'>
          <div className='mx-auto w-11/12 lg:w-1/2 lg:self-center lg:ml-100'>
            <h5>{RichText.asText(section3.heading)}</h5>
            <div className='mt-2 lg:mt-4 space-y-4'>
              {RichText.render(section3.text)}
            </div>
          </div>
          <div className='mt-6 lg:w-1/2 lg:mt-0'>
            <SpecialImage
              imgSrc={section3.fluidImage}
              imgAlt={section3.imageAlt}
              bubbleSide='right'
              bubbleSize='64px'
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default TravelPage;
