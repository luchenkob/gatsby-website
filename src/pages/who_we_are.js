import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

import SpecialImage from '../components/SpecialImage';
import GraySection from '../components/GraySection';

import BackgroundImage from 'gatsby-background-image';

function WhoWeArePage() {
  const { prismic } = useStaticQuery(graphql`
    query {
      prismic {
        who_we_are_page(lang: "en-us", uid: "who-we-are-page") {
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
          section_1_image
          section_1_imageSharp {
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
  const document = prismic.who_we_are_page;

  const { hero, section1 } = {
    hero: {
      heading: document.heading,
      text: document.text,
    },
    section1: {
      text: document.section_1_text,
      fluidImage: document.section_1_imageSharp.childImageSharp.fluid,
      imageAlt: document.section_1_image.alt,
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
            <div className='-mt-12 flex flex-col justify-center h-full xl:justify-start xl:mt-0'>
              <h1 className='xl:mt-202 xl:w-545'>
                {hero.heading[0].text}
                <br />
                {hero.heading[1].text}
              </h1>
            </div>
          </Hero>
        </BackgroundImage>

        <div className='xl:hidden  block'>
          <GraySection text={section1.text} >
            <SpecialImage
              imgSrc={section1.fluidImage}
              imgAlt={section1.imageAlt}
              bubbleSide='right'
            />
          </GraySection>
        </div>

        <div className='hidden xl:block xl:mt-270'>
          <GraySection text={section1.text} >
            <SpecialImage
              imgSrc={section1.fluidImage}
              imgAlt={section1.imageAlt}
              bubbleSide='right'
            />
          </GraySection>
        </div>
      </section>
    </Layout>
  );
}

export default WhoWeArePage;
