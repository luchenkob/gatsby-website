import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

import SpecialImage from '../components/SpecialImage';

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
      <SEO keywords={[`gatsby`, `react`]} title='Who We Are' />

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
              <div className='xl:mt-202 xl:w-545'>
                {RichText.render(hero.heading)}
              </div>
            </div>
          </Hero>
        </BackgroundImage>

        <section className='mt-12 text-left lg:flex lg:mt-52 lg:relative lg:pt-110'>
          <div className='bg-gray-100 pt-10 mx-auto lg:w-full lg:pt-0'>
            <div className='px-2 pb-6 lg:w-1/2 lg:py-40 lg:pl-190 lg:pr-140 desktop:pr-190 ml-auto space-y-4 lg:space-y-8'>
              {RichText.render(section1.text)}
            </div>
          </div>
          <div className='lg:w-1/2 lg:h-full lg:absolute lg:top-0 lg:left-0 lg:mt-px'>
            <SpecialImage
              imgSrc={section1.fluidImage}
              imgAlt={section1.imageAlt}
              bubbleRight={false}
              bubbleSide='right'
              bubbleHigh={true}
            />
          </div>
        </section>

      </section>
    </Layout>
  );
}

export default WhoWeArePage;
