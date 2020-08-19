import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import AsSeenOn from '../components/AsSeenOn';
import SpecialImage from '../components/SpecialImage';
import TextBox from '../components/Home/TextBox';
import ImageBox from '../components/Home/ImageBox';

import iconGraduate from '../images/home/svg/online-education.svg';
import onlineEducation from '../images/home/png/image-online-education@3x.png';
import iconRetail from '../images/home/svg/retail.svg';
import retail from '../images/home/png/image-retail@3x.png';
import iconTravel from '../images/home/svg/travel_2.svg';
import travel from '../images/home/png/image-travel@3x.png';

import brand1 from '../images/home/png/1195-px-marriott-vacation-club-svg.jpg';
import brand2 from '../images/home/png/celebrity-cruise.jpg';
import brand3 from '../images/home/png/amazon.jpg';
import brand4 from '../images/home/png/avis-vector-logo.jpg';
import brand5 from '../images/home/png/british-airways.jpg';
import brand6 from '../images/home/png/carnival-corporation-plc.jpg';

import brand1Mobile from '../images/brand_logos/mobile/1195-px-marriott-vacation-club-svg.jpg';
import brand2Mobile from '../images/brand_logos/mobile/celebrity-cruise.jpg';
import brand3Mobile from '../images/brand_logos/mobile/amazon.jpg';
import brand4Mobile from '../images/brand_logos/mobile/avis-vector-logo.jpg';
import brand5Mobile from '../images/brand_logos/mobile/british-airways.jpg';
import brand6Mobile from '../images/brand_logos/mobile/carnival-corporation-plc.jpg';

import BackgroundImage from 'gatsby-background-image';

function IndexPage() {
  const { prismic } = useStaticQuery(graphql`
    query {
      prismic {
        homepage(lang: "en-us", uid: "homepage") {
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
        }
      }
    }
  `);
  const document = prismic.homepage;

  const { hero, section1, section2, section3 } = {
    hero: {
      heading: document.heading,
      text: document.text,
    },
    section1: {
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
      <SEO keywords={[`gatsby`, `react`]} title='Home' />

      <section className='text-center'>
        <BackgroundImage Tag={`section`} id={`media-test`} fluid={sources}>
          <Hero>
            <div className='flex flex-col justify-center h-full '>
              <div className='xl:w-860'>{RichText.render(hero.heading)}</div>
              <p className='mt-6 xl:mt-10 xl:w-800'>
                {RichText.asText(hero.text)}
              </p>
            </div>
          </Hero>
        </BackgroundImage>

        <section className='mt-6 mx-auto w-11/12 xl:w-screen'>
          <div className='lg:mt-20 xl:w-1522 xl:mx-auto flex xl:justify-center'>
            <AsSeenOn />
          </div>

          <p className='big -mx-2 mt-12 font-light text-sm xl:text-3-5xl text-center xl:mt-40 xl:px-56 xl:w-1522 lg:mx-auto'>
            {RichText.asText(section1.text)}
          </p>

          <div className='xl:hidden mx-auto max-w-xs xl:max-w-none mt-6 grid grid-flow-col-dense grid-rows-4 grid-cols-2 gap-0'>
            <TextBox
              text='E-learning'
              imgSrc={iconGraduate}
              hasBottomBorder={false}
            />
            <ImageBox imgSrc={onlineEducation} arrowDirection='down' />

            <TextBox
              text='E-commerce'
              imgSrc={iconRetail}
              hasTopBorder={false}
              hasBottomBorder={false}
            />
            <ImageBox imgSrc={retail} arrowDirection='down' />

            <ImageBox imgSrc={travel} arrowDirection='up' />
            <TextBox text='Travel' imgSrc={iconTravel} hasTopBorder={false} />
          </div>

          <div className='hidden xl:flex flex-wrap mx-auto mt-18 w-843'>
            <TextBox
              text='E-learning'
              imgSrc={iconGraduate}
              hasBottomBorder={false}
            />

            <ImageBox imgSrc={travel} arrowDirection='up' />

            <TextBox
              text='E-commerce'
              imgSrc={iconRetail}
              hasBottomBorder={false}
            />

            <ImageBox imgSrc={onlineEducation} arrowDirection='down' />

            <TextBox text='Travel' imgSrc={iconTravel} hasTopBorder={false} />

            <ImageBox imgSrc={retail} arrowDirection='down' />
          </div>
        </section>

        <section className='mt-12 lg:mt-40 text-left xl:flex lg:relative lg:pt-110'>
          <div className='bg-gray-100 pt-10 mx-auto lg:w-full lg:pt-0'>
            <div className='px-2 pb-6 lg:w-580 lg:py-40 lg:ml-100 xl:ml-190 lg:px-5'>
              <h2 className='inline-block xl:mb-10'>
                {RichText.asText(section2.heading)}
              </h2>
              <div className='mt-3 xl:mt-0 space-y-4'>
                {RichText.render(section2.text)}
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 lg:h-full lg:absolute lg:top-0 lg:right-0 lg:mt-px'>
            <SpecialImage
              imgSrc={section2.fluidImage}
              imgAlt={section2.imageAlt}
            />
          </div>
        </section>

        <section className='mx-auto w-11/12 mt-12 xl:mt-40'>
          <h2 className='capitalize'>{RichText.asText(section3.heading)}</h2>
          <p className='mt-6 mx-auto xl:mt-10 xl:w-764'>
            {RichText.asText(section3.text)}
          </p>

          <div className='xl:hidden mt-7-5 flex flex-wrap items-center justify-center space-y-5 max-w-md mx-auto'>
            <div className='flex items-center justify-center space-x-4'>
              <img alt='Brand logo' src={brand1Mobile} />
              <img alt='Brand logo' src={brand2Mobile} />
              <img alt='Brand logo' src={brand3Mobile} />
            </div>
            <div className='flex items-center space-x-4'>
              <img alt='Brand logo' src={brand4Mobile} />
              <img alt='Brand logo' src={brand5Mobile} />
              <img alt='Brand logo' src={brand6Mobile} />
            </div>
          </div>

          <div className='hidden xl:flex mt-22 flex-row items-center space-x-18 justify-center w-1260 mx-auto'>
            {[brand1, brand2, brand3, brand4, brand5, brand6].map(
              (logo, index) => (
                <img
                  key={index}
                  className='hidden xl:block'
                  src={logo}
                  alt='Brand logo'
                />
              ),
            )}
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default IndexPage;
