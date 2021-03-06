import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {RichText} from 'prismic-reactjs'

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ContactBox from '../components/ContactUs/ContactBox';

import iconQuestion from '../images/contact_us/icon-questions.svg';
import iconSales from '../images/contact_us/icon-sales.svg';
import iconMedia from '../images/contact_us/icon-media.svg';

import BackgroundImage from 'gatsby-background-image';

function ContactUsPage() {
  const { prismic } = useStaticQuery(graphql`
    query {
      prismic {
        contact_us_page(lang: "en-us", uid: "contact-us-page") {
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
          contacts {
            contact_email
            contact_heading
            contact_text
          }
        }
      }
    }
  `);
  const document = prismic.contact_us_page;

  const { hero, section1 } = {
    hero: {
      heading: document.heading,
      text: document.text,
    },
    section1: {
      heading: document.section_1_heading,
      contacts: document.contacts
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
        keywords={[`gatsby`, `react`,]}
        title='Contact Us'
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
            <div className=' flex flex-col justify-center h-full'>
              <div className='lg:w-545'>
                {RichText.render(hero.heading)}
              </div>
            </div>
          </Hero>
        </BackgroundImage>

        <section className='w-11/12 mt-12 lg:mt-40 lg:w-1064 mx-auto'>
          {RichText.render(section1.heading)}
        </section>

        <div className='mt-6 mx-auto w-11/12 lg:mt-20 flex flex-col border-gray-200 border divide-y divide-gray-200 lg:flex-row lg:max-w-4xl xl:w-1260 lg:divide-x lg:divide-y-0 xl:max-w-none'>
            <ContactBox
              heading={section1.contacts[0].contact_heading}
              text={section1.contacts[0].contact_text}
              svgUrl={iconQuestion}
              toMail={section1.contacts[0].contact_email}
            />
            <ContactBox
              heading={section1.contacts[1].contact_heading}
              text={section1.contacts[1].contact_text}
              svgUrl={iconSales}
              toMail={section1.contacts[1].contact_email}
            />
            <ContactBox
              heading={section1.contacts[2].contact_heading}
              text={section1.contacts[2].contact_text}
              svgUrl={iconMedia}
              toMail={section1.contacts[2].contact_email}
            />
        </div>
      </section>
    </Layout>
  );
}

export default ContactUsPage;
