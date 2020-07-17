import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Button from '../components/Button';
import SpecialImage from '../components/SpecialImage';
import BackgroundImage from 'gatsby-background-image';
function CareersPage() {
  const { prismic } = useStaticQuery(
    graphql`
      query {
        prismic {
          careers_page(lang: "en-us", uid: "careers-page") {
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
            section_1_heading
            section_1_text
            section_2_heading
            section_2_text
            section_2_email
            section_2_image
            section_2_imageSharp {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `,
  );
  const document = prismic.careers_page;
  const { hero, section1, section2 } = {
    hero: { heading: document.heading, text: document.text },
    section1: {
      heading: document.section_1_heading,
      text: document.section_1_text,
    },
    section2: {
      heading: document.section_2_heading,
      text: document.section_2_text,
      email: document.section_2_email,
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
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `react`]} title='Careers' />
      <section className='text-center'>
        <BackgroundImage
          Tag={`section`}
          id={`media-test`}
          fluid={sources}
          style={{ backgroundPosition: 'top' }}
        >
          <Hero>
            <div className='flex flex-col justify-center h-full'>
              <div className='w-8/12 lg:w-734'>
                {RichText.render(hero.heading)}
              </div>
            </div>
          </Hero>
        </BackgroundImage>
        <section className='mt-12 mx-auto w-11/12 lg:mt-40'>
          {RichText.render(section1.heading)}
          <div className='mt-6 px-4 lg:mt-10 lg:w-960 lg:px-6 mx-auto'>
            {RichText.render(section1.text)}
          </div>
        </section>
        <section className='mt-12 text-left lg:flex lg:mt-40 lg:relative lg:pt-110'>
          <div className='bg-gray-100 pt-10 mx-auto lg:w-full lg:pt-0'>
            <div className='px-2 pb-6 lg:w-1/2 lg:py-40 lg:pl-190 lg:pr-140 desktop:pr-190 ml-auto'>
              {RichText.render(section2.heading)}
              <div className='mt-2 lg:mt-4'>
                {RichText.render(section2.text)}
              </div>
              <div className='mt-4 lg:mt-8'>
                <Button
                  text='Check job openings'
                  toMail={RichText.asText(section2.email)}
                />
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 lg:h-full lg:absolute lg:top-0 lg:left-0 lg:mt-px'>
            <SpecialImage
              imgSrc={section2.fluidImage}
              imgAlt={section2.imageAlt}
              bubbleSide='right'
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}
export default CareersPage;
