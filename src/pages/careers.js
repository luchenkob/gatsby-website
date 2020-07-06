import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Button from '../components/Button';
import SpecialImage from '../components/SpecialImage';

import image from '../images/careers/png/image@3x.png';

import BackgroundImage from 'gatsby-background-image';

function CareersPage() {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "careers/png/image-main@3x.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(relativePath: { eq: "careers/png/image-main.png" }) {
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
        title='Careers'
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
              <h1 className='lg:mt-202 lg:w-734'>
                Grow professionally and personally
              </h1>
            </div>
          </Hero>
        </BackgroundImage>

        <section className='mt-12 mx-auto w-11/12 lg:mt-40'>
          <h2>Life at Meliorism</h2>
          <p className='mt-6 w-320 mx-auto lg:mt-10 lg:mb-270 lg:w-960'>
            Our benefits go beyond flexible schedules and unmatched
            compensation. We invest in people so they can live their best lives
            at work and home. At Meliorism, you&apos;re part of a smart,
            motivated team of people who spend their days mastering digital
            technology—and having a good time doing it. With competitive
            benefits, an open culture, great office location, and passionate
            coworkers, work just doesn&apos;t feel like work.
          </p>
        </section>

        <section className='mt-12 text-left bg-gray-100 lg:flex lg:mt-52 lg:flex-row-reverse'>
          <div className='pt-10 px-10px lg:self-center lg:mt-0 lg:w-580'>
            <h2 className='inline-block'>Talent Pool</h2>
            <p className='lg:mt-4'>Get in touch with our Talent Acquisition team.</p>
            <div className='mt-4 lg:mt-8'>
              <Button
                text='Check job openings'
                toMail='careers@bemeliorism.com'
              />
            </div>
          </div>
          <div className='mt-6 lg:w-1/2 lg:-mt-110'>
            <SpecialImage
              imgSrc={image}
              imgAlt='Group of professionals smiling'
              bubbleSide='right'
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default CareersPage;
