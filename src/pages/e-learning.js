import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SpecialImage from '../components/SpecialImage';

import BackgroundImage from 'gatsby-background-image';

function ELearningPage() {
  const { prismic } = useStaticQuery(graphql`
    query {
      prismic {
        eLearning_page(lang: "en-us", uid: "e-learning-page") {
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
          section_3_heading
          section_3_subheading
          section_3_text
          section_3_image
          section_3_imageSharp {
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

  if (!prismic) return null;
  const document = prismic.eLearning_page;

  const { hero, section1, section2, section3 } = {
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
    section3: {
      heading: document.section_3_heading,
      subheading: document.section_3_subheading,
      text: document.section_3_text,
      fluidImage: document.section_3_imageSharp.childImageSharp.fluid,
      imageAlt: document.section_3_image.alt,
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
        title='E-learning'
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
            <div className='flex flex-col justify-center h-full xl:mt-0'>
              <div className='pr-32 xl:pr-0 xl:w-916'>
                {RichText.render(hero.heading)}
              </div>
              <p className='mt-6 xl:mt-10 xl:w-800'>
                {RichText.asText(hero.text)}
              </p>
            </div>
          </Hero>
        </BackgroundImage>

        <section className='mt-12 mx-auto w-11/12 xl:mt-40 xl:w-916'>
          <p>{RichText.asText(section1.text)}</p>
        </section>

        <section className='mt-12 text-left xl:flex xl:mt-40 xl:relative xl:pt-110'>
          <div className='bg-gray-100 pt-10 mx-auto xl:w-full xl:pt-0'>
            <div className='px-2 pb-6 xl:w-1/2 xl:py-40 xl:pl-190 xl:pr-140 desktop:pr-190'>
            {RichText.render(section2.text)}
            <ul className='block mt-2 xl:mt-6 list-none space-y-2 xl:space-y-4' style={{}}>
              {listItems.map((item, index) => (
                <li key={index} className='flex items-center'>
                  <div className='inline-block h-1 w-1 xl:h-2 xl:w-2 rounded-full bg-purple'></div>
                  <span className='ml-2'>{item}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>
          <div className='xl:w-1/2 xl:h-full xl:absolute xl:top-0 xl:right-0 xl:mt-3px'>
            <SpecialImage
              imgSrc={section2.fluidImage}
              imgAlt={section2.imageAlt}
            />
          </div>
        </section>

        <h3 className='mt-16 mx-5 sm:w-11/12 xl:mx-auto xl:mt-40'>
          {RichText.asText(section3.heading)}
        </h3>

        <section className='mx-auto mt-10 text-left flex flex-col xl:flex-row-reverse xl:mt-20 xl:w-1260 xl:h-400'>
          <div className='mx-auto text-left w-11/12 xl:w-1/2 xl:pl-100 xl:mx-0 xl:self-center'>
            <h5>{RichText.asText(section3.subheading)}</h5>
            <div className='mt-2 xl:mt-4 space-y-4'>
              {RichText.render(section3.text)}
            </div>
          </div>
          <div className='xl:w-580'>
            <Img
              className='block mt-6 w-screen xl:mt-0 xl:w-full xl:h-full'
              fluid={section3.fluidImage}
              alt={section3.imageAlt}
            />
          </div>
        </section>

      </section>
    </Layout>
  );
}

export default ELearningPage;
