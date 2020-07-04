import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SpecialImage from '../components/SpecialImage';

import background from '../images/ecommerce/png/image-main.png';
import image from '../images/ecommerce/png/image.png';

function ECommercePage() {
  const listItems = [
    'Enable start-ups, brands and retailers',
    'Develop unique e-commerce eco-system',
    'Ensure strong SEO performance',
    'Warrant seamless user experience',
    'Offer AI-based analytic dashboard',
  ];

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='E-commerce'
      />

      <section className='text-center'>
        <Hero backgroundUrl={background}>
          <div className='flex h-64'>
            <h1 className='mt-8 self-center text-2xl font-bold'>
              Empowering
              <br />
              the ‘E’ for your
              <br />
              E-commerce Ideas
            </h1>
          </div>
        </Hero>

        <section className='mt-12 px-3'>
          <p>
            We live in a world where individuals and businesses are validated
            purely based on their digital presence. If you have an idea for a
            business or own one already, then Meliorism is here to guide you and
            empower you through the online platform to stay at the top of your
            game. We leverage unique solutions created for your unique business
            model.
          </p>
        </section>

        <section className='mt-12 text-left px-3 bg-gray-100'>
          <p className='inline-block mt-10'>
            Our team of experts have hands-on experience in delivering different
            e-learning solutions that maximize.{' '}
          </p>
          <ul className='block mt-2 text-xs list-none space-y-1' style={{}}>
            {listItems.map((item, index) => (
              <li key={index} className='flex items-center'>
                <div className='inline-block h-1 w-1 rounded-full bg-purple'></div>
                <span className='ml-2'>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className='mt-6'>
          <SpecialImage
            imgSrc={image}
            imageAlt='Group of professionals smiling'
          />
        </div>
      </section>
    </Layout>
  );
}

export default ECommercePage;
