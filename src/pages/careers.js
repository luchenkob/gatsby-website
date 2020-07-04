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
            <h1 className='mt-8 self-center text-2xl font-bold'>
              Grow
              <br />
              professionally
              <br />
              and personally
            </h1>
          </div>
        </Hero>

        <section className='mt-12 px-3'>
          <h2>Life at Meliorism</h2>
          <p className='mt-6'>
            Our benefits go beyond flexible schedules and unmatched
            compensation. We invest in people so they can live their best lives
            at work and home. At Meliorism, you&apos;re part of a smart,
            motivated team of people who spend their days mastering digital
            technology—and having a good time doing it. With competitive
            benefits, an open culture, great office location, and passionate
            coworkers, work just doesn&apos;t feel like work.
          </p>
        </section>

        <section className='mt-12 text-left px-3 bg-gray-100'>
          <h2 className='inline-block mt-10'>Talent Pool</h2>
          <span className='block mt-2 text-xs'>
            Get in touch with our Talent Acquisition team.
          </span>

          <div className='mt-4'>
            <Button text='Check job openings' />
          </div>
        </section>
        <SpecialImage
          imgSrc={image}
          imageAlt='Group of professionals smiling'
        />
      </section>
    </Layout>
  );
}

export default CareersPage;
