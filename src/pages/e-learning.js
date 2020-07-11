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

        <section className='mt-12 mx-auto w-11/12 lg:mt-40 lg:w-916 lg:mb-270'>
          <p>{RichText.asText(section1.text)}</p>
        </section>

        <section className='mt-12 text-left bg-gray-100 lg:flex lg:mt-52'>
          <div className='pt-10 mx-auto w-11/12 max-w-sm xl:pt-0 lg:w-580 xl:mt-auto xl:mb-40 lg:mr-183 xl:max-w-none'>
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
              imgHeight="806"
            />
          </div>
        </section>

        <h3 className='mt-16 mx-5 sm:w-11/12 lg:mx-auto lg:mt-40'>
          {RichText.asText(section3.heading)}
        </h3>

        <section className='mt-6 text-left flex flex-col lg:flex-row-reverse mx-auto lg:mt-20 lg:max-w-4xl xl:w-1260 xl:h-400'>
          <div className='mx-auto mt-2 text-left w-11/12 lg:self-center lg:mt-0 lg:w-1/2 lg:ml-100 xl:mr-auto'>
            <h5>{RichText.asText(section3.subheading)}</h5>
            <div className='mt-2 lg:mt-4'>{RichText.render(section3.text)}</div>
          </div>
          <div className='lg:w-1/2'>
            <Img
              className='block mt-6 w-screen lg:h-full lg:w-full object-center object-contain'
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
