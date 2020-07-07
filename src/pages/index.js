import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import AsSeenOn from '../components/AsSeenOn';
import SpecialImage from '../components/SpecialImage';
import GraySection from '../components/GraySection';
import TextBox from '../components/Home/TextBox';
import ImageBox from '../components/Home/ImageBox';

import image from '../images/home/png/image_3@3x.png';

import iconGraduate from '../images/home/svg/graduate.svg';
import onlineEducation from '../images/home/png/image-online-education@3x.png';
import iconRetail from '../images/home/svg/retail.svg';
import retail from '../images/home/png/image-retail@3x.png';
import iconTravel from '../images/home/svg/travel.svg';
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
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
  query {
    mobileImage: file(relativePath: { eq: "home/png/image.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopImage: file(relativePath: { eq: "home/png/image-main.png" }) {
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
        title='Home'
      />

      <section className='text-center'>
        <BackgroundImage Tag={`section`} id={`media-test`} fluid={sources}>
          <Hero>
            <div className='-mt-12 flex flex-col justify-center h-full lg:justify-start lg:mt-140 lg:w-860'>
              <h1>Driven by technology, powered by expertise</h1>
              <p className='lg:mt-10 lg:w-800'>
                The most distinguished organizations recognize the edge of
                technological evolution. As trusted leaders at the forefront of
                technology progression, we help our customers stay competitive
                through innovative solutions and building capability.
              </p>
            </div>
          </Hero>
        </BackgroundImage>
        <section className='mt-6 mx-auto w-11/12 md:w-screen'>
          <div className='lg:w-1522 lg:mx-auto flex lg:justify-center'>

          <AsSeenOn />
          </div>

          <p className='big mt-12 font-light text-sm md:text-3-5xl text-center lg:mt-165 lg:px-56 lg:w-1522 mx-auto'>
            Helping you build a thriving digital business, both in what you do
            and how you do it through innovative solutions designed for:
          </p>

          <div className='md:hidden mx-auto w-11/12 mt-8 grid grid-flow-col grid-rows-4 grid-cols-2'>
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

          <div className='hidden md:flex flex-wrap mx-auto mt-18 w-843 mb-270'>
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

        <GraySection
          heading='How we do it'
          text='In a hyper-connected world, we adapt and empower business and
              individuals to compete through technology. We develop and execute
              technology solutions to improve our customers’ effective processes
              and dynamic outcomes. Ultimately, allowing them to become
              high-performance businesses.'
              widthOfText='580'
        >
          <SpecialImage
            imgSrc={image}
            imgAlt='Man with laptop smiling while sitting on armchair'
          />
        </GraySection>

        <section className='mx-auto w-11/12 mt-12 lg:mt-40'>
          <h2 className='capitalize'>Brands we work with</h2>
          <p className='mt-6 mx-auto lg:w-764 lg:mt-10 lg:w-800'>
            World-leading technology partners. We know that to deliver
            outstanding business outcomes for our clients, we need to work with
            the most reliable in the industry.
          </p>

          <div className='md:hidden mt-7-5 flex flex-wrap items-center justify-center space-y-5'>
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

          <div className='hidden lg:flex mt-22 flex-row items-center space-x-18 justify-center w-1260 mx-auto'>
            {[brand1, brand2, brand3, brand4, brand5, brand6].map(
              (logo, index) => (
                <img
                  key={index}
                  className='hidden md:block'
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
