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

import brand1 from '../images/home/png/1195-px-marriott-vacation-club-svg.png';
import brand2 from '../images/home/png/celebrity-cruise.png';
import brand3 from '../images/home/png/amazon.png';
import brand4 from '../images/home/png/avis-vector-logo.png';
import brand5 from '../images/home/png/british-airways.png';
import brand6 from '../images/home/png/carnival-corporation-plc.png';

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
            <div className='-mt-12 flex flex-col justify-center h-full'>
              <h1>Driven by technology, powered by expertise</h1>
              <p>
                The most distinguished organizations recognize the edge of
                technological evolution. As trusted leaders at the forefront of
                technology progression, we help our customers stay competitive
                through innovative solutions and building capability.
              </p>
            </div>
          </Hero>
        </BackgroundImage>
        <section className='mt-6 mx-auto w-11/12 '>
          <AsSeenOn />

          <p className='big mt-12 font-light text-sm md:text-3-5xl text-center'>
            Helping you build a thriving digital business, both in what you do
            and how you do it through innovative solutions designed for:
          </p>

          <div className='md:hidden mx-auto w-11/12 mt-8 grid grid-flow-col grid-rows-4 grid-cols-2'>
            <TextBox
              text='Online education'
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

          <div className='hidden md:flex flex-wrap mx-auto mt-8 w-843'>
            <TextBox
              text='Online education'
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
        >
          <SpecialImage
            imgSrc={image}
            imgAlt='Man with laptop smiling while sitting on armchair'
          />
        </GraySection>

        <section className='mx-auto w-11/12 mt-12'>
          <h2 className='capitalize'>Brands we work with</h2>
          <p className='mt-6 mx-auto lg:w-764 lg:mt-10'>
            World-leading technology partners. We know that to deliver
            outstanding business outcomes for our clients, we need to work with
            the most reliable in the industry.
          </p>

          <div className='md:hidden mt-7-5 grid grid-flow-row gap-3'>
            <div className='flex items-center justify-center space-x-4'>
              <img alt='Brand logo' src={brand1} />
              <img alt='Brand logo' src={brand2} />
              <img alt='Brand logo' src={brand3} />
            </div>
            <div className='flex items-center justify-center space-x-4'>
              <img alt='Brand logo' src={brand4} />
              <img alt='Brand logo' src={brand5} />
              <img alt='Brand logo' src={brand6} />
            </div>
          </div>

          <div className='hidden md:flex mt-22 flex-row items-center justify-between w-4/5 max-w-5xl mx-auto'>
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
