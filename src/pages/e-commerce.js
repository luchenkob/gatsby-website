import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SpecialImage from '../components/SpecialImage';

import image from '../images/ecommerce/png/image@3x.png';

import BackgroundImage from 'gatsby-background-image';

function ECommercePage() {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(
        relativePath: { eq: "ecommerce/png/image-main@3x.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(
        relativePath: { eq: "ecommerce/png/image-main.png" }
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

  const listItems = [
    'Enable start-ups, brands and retailers',
    'Develop unique e-commerce eco-system',
    'Ensure strong SEO performance',
    'Warrant seamless user experience',
    'Offer AI-based analytic dashboard',
  ];

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='E-commerce'
      />

      <section className='text-center'>
        <BackgroundImage className='bg-center' Tag={`section`} id={`media-test`} fluid={sources} style={{
          backgroundPosition: 'top'
        }}>
          <Hero>
            <div className='-mt-12 flex flex-col justify-center h-full'>
              <h1>
                Empowering
                <br />
                the ‘E’ for your
                <br />
                E-commerce Ideas
              </h1>
            </div>
          </Hero>
        </BackgroundImage>

        <section className='mt-12 mx-auto w-11/12  max-w-xl'>
          <p>
            We live in a world where individuals and businesses are validated
            purely based on their digital presence. If you have an idea for a
            business or own one already, then Meliorism is here to guide you and
            empower you through the online platform to stay at the top of your
            game. We leverage unique solutions created for your unique business
            model.
          </p>
        </section>

        <section className='mt-12 text-left bg-gray-100 md:flex md:mt-52 md:flex-row-reverse'>
          <div className='mt-10 mx-auto w-11/12 md:w-1/2 md:max-w-xs lg:max-w-sm md:self-center md:mt-0'>
            <p>
              Count on our team and their digital know-how to craft your online
              presence because we:
            </p>
            <ul className='block mt-2 text-xs list-none space-y-2' style={{}}>
              {listItems.map((item, index) => (
                <li key={index} className='flex items-center'>
                  <div className='inline-block h-1 w-1 rounded-full bg-purple'></div>
                  <span className='ml-2'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-6 md:w-1/2 md:-mt-16'>
            <SpecialImage
              imgSrc={image}
              imgAlt='Man on phone smiling'
              bubbleRight={false}
              bubbleSide='right'
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default ECommercePage;
