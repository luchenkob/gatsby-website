import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SpecialImage from '../components/SpecialImage';
import BackgroundImage from 'gatsby-background-image';
function ECommercePage() {
  const { prismic } = useStaticQuery(
    graphql`
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
    `,
  );
  const document = prismic.eCommerce_page;
  const { hero, section1, section2 } = {
    hero: { heading: document.heading, text: document.text },
    section1: { text: document.section_1_text },
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
      <SEO keywords={[`gatsby`, `react`]} title='E-commerce' />
      <section className='text-center'>
        <BackgroundImage
          className='bg-center'
          Tag={`section`}
          id={`media-test`}
          fluid={sources}
          style={{ backgroundPosition: 'top' }}
        >
          <Hero>
            <div className=' flex flex-col justify-center h-full '>
              <div className=' lg:w-860'>{RichText.render(hero.heading)}</div>
            </div>
          </Hero>
        </BackgroundImage>
        
        <div className='mt-12 mx-auto w-11/12 lg:mt-40 lg:w-900'>
          {RichText.asText(section1.text)}
        </div>

        <section className='mt-12 text-left lg:flex lg:mt-40 lg:relative lg:pt-110'>
          <div className='bg-gray-100 pt-10 mx-auto lg:w-full lg:pt-0'>
            <div className='px-2 pb-6 lg:w-1/2 lg:py-40 lg:pl-190 lg:pr-140 desktop:pr-190 ml-auto'>
              {RichText.render(section2.text)}
              <ul className='block mt-2 lg:mt-6 list-none space-y-2 lg:space-y-4'>
                {listItems.map((item, index) => (
                  <li key={index} className='flex items-center'>
                    <div className='inline-block h-1 w-1 lg:h-2 lg:w-2 rounded-full bg-purple'></div>
                    <span className='ml-2'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='lg:w-1/2 lg:h-full lg:absolute lg:top-0 lg:left-0'>
            <SpecialImage
              imgSrc={section2.fluidImage}
              imgAlt={section2.imageAlt}
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
export default ECommercePage;
