import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ContactBox from '../components/ContactUs/ContactBox';

import background from '../images/contact_us/png/image-main.png';

import iconQuestion from '../images/contact_us/svg/icon-questions.svg';
import iconSales from '../images/contact_us/svg/icon-sales.svg';
import iconMedia from '../images/contact_us/svg/icon-media.svg';

function ContactUsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Contact Us'
      />

      <section className='text-center'>
        <Hero backgroundUrl={background}>
          <div className='-mt-12 flex flex-col justify-center h-full'>
            <h1>
              We&apos;d love to
              <br />
              hear from you
            </h1>
          </div>
        </Hero>

        <section className='mt-12'>
          <h2>Our team is always ready to help - get in touch</h2>
        </section>

        <section className='mt-12 mx-auto w-11/12'>
          <div className='mt-8 flex flex-col border-gray-200 border divide-y divide-gray-200 max-w-xs w-11/12 mx-auto lg:flex-row lg:max-w-4xl lg:divide-x lg:divide-y-0'>
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
