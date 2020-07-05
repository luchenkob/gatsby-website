import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Button from '../components/Button';
import SpecialImage from '../components/SpecialImage';

import background from '../images/careers/png/image-main.png';
import image from '../images/careers/png/image.png';

function CareersPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Careers'
      />

      <section className='text-center'>
        <Hero backgroundUrl={background}>
          <div className='flex h-64'>
            <h1 className='mt-8 self-center '>
              Grow
              <br />
              professionally
              <br />
              and personally
            </h1>
          </div>
        </Hero>

        <section className='mt-12 mx-auto w-11/12'>
          <h2>Life at Meliorism</h2>
          <p className='mt-6 max-w-3xl mx-auto'>
            Our benefits go beyond flexible schedules and unmatched
            compensation. We invest in people so they can live their best lives
            at work and home. At Meliorism, you&apos;re part of a smart,
            motivated team of people who spend their days mastering digital
            technology—and having a good time doing it. With competitive
            benefits, an open culture, great office location, and passionate
            coworkers, work just doesn&apos;t feel like work.
          </p>
        </section>

        <section className='mt-12 text-left bg-gray-100 md:flex md:mt-52 md:flex-row-reverse'>
          <div className='mt-10 mx-auto w-11/12 md:w-1/2 md:max-w-xs lg:max-w-sm md:self-center md:mt-0'>
            <h2 className='inline-block'>Talent Pool</h2>
            <p>Get in touch with our Talent Acquisition team.</p>
            <div className='mt-4'>
              <Button
                text='Check job openings'
                toMail='careers@bemeliorism.com'
              />
            </div>
          </div>
          <div className='mt-6 md:w-1/2 md:-mt-16'>
            <SpecialImage
              imgSrc={image}
              imgAlt='Group of professionals smiling'
              bubbleSide='right'
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default CareersPage;
