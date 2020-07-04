import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SpecialImage from '../components/SpecialImage';

import background from '../images/elearning/png/image-main.png';
import image from '../images/elearning/png/image.png';
import image2 from '../images/elearning/png/image-2.png';

function CareersPage() {
  const listItems = [
    'Live Streaming Videos',
    'Virtual Classroom',
    'Web Application/Portal',
    'User Engagement',
    'Library For Pre-recorder Session',
    'Live Session',
    'Accessibility',
    'Cost-effectiveness',
  ];

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Careers'
      />

      <section className='text-center'>
        <Hero backgroundUrl={background}>
          <div className='flex flex-col justify-center'>
            <h1 className='mt-16  text-2xl font-bold'>
              E-learning
              <br />
              is growing.
              <br />
              Grow with it.
            </h1>
            <p className='mt-6'>
              Custom E-Learning Solutions to address tomorrow’s challenges
            </p>
          </div>
        </Hero>

        <section className='mt-12 px-3'>
          <p>
            Meliorism consolidates all e-learning needs into one advanced
            platform giving companies and organizations the right tools for a
            simpler and more connected learning experience.
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

        <section className='mt-12 px-3'>
          <h2>
            Count on our expertise to build custom E-Learning solutions for your
            sector.
          </h2>
          <h5 className='text-left mt-6'>Corporate sector</h5>
          <p className='mt-2 text-left '>
            Continuous workforce training poses several challenges in the
            corporate context. Our top-notch knowledge portals, certification
            solutions, and coaching platforms help employers streamline
            onboarding and keep their team motivated.
          </p>
        </section>

        <img
          className='block mt-6 w-screen'
          src={image2}
          alt='People having a meeting'
        />
      </section>
    </Layout>
  );
}

export default CareersPage;
