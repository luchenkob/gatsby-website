import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SpecialImage from '../components/SpecialImage';

import background from '../images/travel/png/image-main.png';
import image from '../images/travel/png/image.png';
import image2 from '../images/travel/png/image-2.png';

function TravelPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Travel'
      />

      <section className='text-center'>
        <Hero backgroundUrl={background}>
          <div className='flex flex-col justify-center'>
            <h1 className='mt-16'>
              Web & App-Based
              <br />
              Travel and
              <br />
              Hospitality Solutions
            </h1>
            <p className='mt-6'>
              Custom E-Learning Solutions to address tomorrow’s challenges
            </p>
          </div>
        </Hero>

        <section className='mt-12 mx-auto w-11/12'>
          <h2>We built travel platforms that allow companies to reduce cost</h2>
          <p className='mt-6'>
            Our travel platform is used by companies looking to lower their
            bottom line as well as reward their employees. By accessing our
            system for corporate travel or providing employees with memberships,
            you can reduce your costs and increase employee retention.
          </p>
        </section>

        <section className='mt-10 mx-auto w-11/12 text-left'>
          <h5>Supply fulfillment for travel clubs</h5>
          <p className='mt-2 text-left'>
            We provide travel clubs around the world with an unparalleled
            technology and fulfillment service. Members have access to
            incredible online travel savings and a team of professionally
            trained Travel Concierges.
          </p>
        </section>

        <img
          className='block mt-6 w-screen'
          src={image}
          alt='Woman on a boat standing with her arms open towards the sea'
        />

        <section className='mt-10 mx-auto w-11/12 text-left'>
          <h5>Loyalty rewards programs</h5>
          <p className='mt-2 text-left'>
            With our dynamic Loyalty Rewards Program your members will see
            immediate benefits from using your product. By being directly
            rewarded for every purchase made, your members will develop loyalty
            to your program and stay with you year after year.
          </p>
        </section>
        <div className='mt-6'>
          <SpecialImage
            imgSrc={image2}
            imageAlt='Woman on the beach in a hammock smiling at her phone'
          />
        </div>
      </section>
    </Layout>
  );
}

export default TravelPage;
