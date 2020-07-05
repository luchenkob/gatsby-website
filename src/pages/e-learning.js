import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SpecialImage from '../components/SpecialImage';

import background from '../images/elearning/png/image-main.png';
import image from '../images/elearning/png/image.png';
import image2 from '../images/elearning/png/image-2.png';

function ELearningPage() {
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
        title='E-learning'
      />

      <section className='text-center'>
        <Hero backgroundUrl={background}>
          <div className='-mt-12 flex flex-col justify-center h-full'>
            <h1>
              E-learning
              <br />
              is growing.
              <br />
              Grow with it.
            </h1>
            <p>Custom E-Learning Solutions to address tomorrow’s challenges</p>
          </div>
        </Hero>

        <section className='mt-12 mx-auto w-11/12 max-w-xl'>
          <p>
            Meliorism consolidates all e-learning needs into one advanced
            platform giving companies and organizations the right tools for a
            simpler and more connected learning experience.
          </p>
        </section>

        <section className='mt-12 text-left bg-gray-100 md:flex md:mt-52'>
          <div className='mt-10 mx-auto w-11/12 md:w-1/2 md:max-w-xs lg:max-w-sm md:self-center md:mt-0'>
            <p>
              Our team of experts have hands-on experience in delivering
              different <strong>e-learning solutions that maximize.</strong>
            </p>
            <ul className='block mt-2 text-xs list-none space-y-2' style={{}}>
              {listItems.map((item, index) => (
                <li key={index} className='flex items-center'>
                  <div className='inline-block h-1 w-1 rounded-full bg-purple'></div>
                  <span className='ml-2'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-6 md:w-1/2 md:-mt-16'>
            <SpecialImage imgSrc={image} imgAlt='Woman working on the laptop' />
          </div>
        </section>

        <h2 className='mt-16 w-11/12 mx-auto'>
          Count on our expertise to build custom E-Learning solutions for your
          sector.
        </h2>

        <section className='mt-10 text-left flex flex-col md:flex-row-reverse max-w-3xl mx-auto'>
          <div className='mx-auto mt-2 text-left w-11/12 md:w-1/2 md:max-w-xs lg:max-w-sm md:self-center md:mt-0'>
            <h5>Corporate sector</h5>
            <p className='mt-4'>
              Continuous workforce training poses several challenges in the
              corporate context. Our top-notch knowledge portals, certification
              solutions, and coaching platforms help employers streamline
              onboarding and keep their team motivated.
            </p>
          </div>
          <img
            className='block mt-6 w-screen md:w-1/2'
            src={image2}
            alt='People having a meeting'
          />
        </section>
      </section>
    </Layout>
  );
}

export default ELearningPage;
