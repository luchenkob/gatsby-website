import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SpecialImage from '../components/SpecialImage';

import BackgroundImage from 'gatsby-background-image';

function ECommercePage() {
  const { prismic } = useStaticQuery(graphql`
    query {
      prismic {
        eCommerce_page(lang: "en-us", uid: "e-commerce-page") {
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
          section_2_text
          section_2_image
          section_2_imageSharp {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          features {
            feature_text
          }
        }
      }
    }
  `);
  const document = prismic.eCommerce_page;

  const { hero, section1, section2 } = {
    hero: {
      heading: document.heading,
      text: document.text,
    },
    section1: {
      text: document.section_1_text,
    },
    section2: {
      text: document.section_2_text,
      fluidImage: document.section_2_imageSharp.childImageSharp.fluid,
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

  const listItems = document.features.map((item) => item.feature_text);

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `react`,]}
        title='E-commerce'
      />

      <section className='text-center'>
        <BackgroundImage
          className='bg-center'
          Tag={`section`}
          id={`media-test`}
          fluid={sources}
          style={{
            backgroundPosition: 'top',
          }}
        >
          <Hero>
            <div className='-mt-12 flex flex-col justify-center h-full lg:justify-start lg:mt-0'>
              <div className=' lg:w-860 lg:mt-152'>
                {RichText.render(hero.heading)}
              </div>
            </div>
          </Hero>
        </BackgroundImage>

        <div className='mt-12 mx-auto w-11/12 lg:mt-40 lg:w-734 lg:mb-270'>
          {RichText.asText(section1.text)}
        </div>

        <section className='mt-12 text-left bg-gray-100 lg:flex lg:mt-52 lg:flex-row-reverse'>
          <div className='pt-10 mx-auto w-11/12 lg:w-1/2 lg:mt-auto lg:mb-40 lg:px-40'>
            {RichText.render(section2.text)}
            <ul className='block mt-2 lg:mt-6 list-none space-y-2 lg:space-y-4' style={{}}>
              {listItems.map((item, index) => (
                <li key={index} className='flex items-center'>
                  <div className='inline-block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-purple'></div>
                  <span className='ml-2'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-6 lg:w-1/2 lg:-mt-110'>
            <SpecialImage
              imgSrc={section2.fluidImage}
              imgAlt={section2.imageAlt}
              bubbleRight={false}
              bubbleSide='right'
              bubbleHigh={true}
              imgHeight="686"
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default ECommercePage;
