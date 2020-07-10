import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {RichText} from 'prismic-reactjs'

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ContactBox from '../components/ContactUs/ContactBox';

import iconQuestion from '../images/contact_us/svg/icon-questions.svg';
import iconSales from '../images/contact_us/svg/icon-sales.svg';
import iconMedia from '../images/contact_us/svg/icon-media.svg';

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
      text: document.section_1_heading,
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
  console.log(section1)

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
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
            <div className='-mt-12 flex flex-col justify-center h-full lg:justify-start lg:mt-0'>
              <div className='lg:mt-202 lg:w-545'>
                {RichText.render(hero.heading)}
              </div>
            </div>
          </Hero>
        </BackgroundImage>

        <section className='mt-12 lg:mt-40 lg:w-1064 mx-auto'>
          <h2>Our team is always ready to help - get in touch</h2>
        </section>

        <section className='mt-12 mx-auto w-11/12 lg:mt-20'>
          <div className='mt-8 flex flex-col border-gray-200 border divide-y divide-gray-200 w-11/12 max-w-4xl mx-auto lg:flex-row lg:w-1260 lg:divide-x lg:divide-y-0 xl:max-w-none'>
            <ContactBox
              heading='General Questions'
              text='Have a general question for us?'
              svgUrl={iconQuestion}
              toMail='info@bemeliorism.com'
            />
            <ContactBox
              heading='Sales'
              text="We'd love to talk about how we can work together."
              svgUrl={iconSales}
              toMail='sales@bemeliorism.com'
            />
            <ContactBox
              heading='Media and Press'
              text='Get news, company info, and media resources.'
              svgUrl={iconMedia}
              toMail='media@bemeliorism.com'
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default ContactUsPage;
