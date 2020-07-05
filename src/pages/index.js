import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import AsSeenOn from '../components/AsSeenOn';
import SpecialImage from '../components/SpecialImage';
import TextBox from '../components/Home/TextBox';
import ImageBox from '../components/Home/ImageBox';

// import background from '../images/home/png/image@3x.png';
import background from '../images/home/png/image-main@3x.png';
import image from '../images/home/png/image_2.png';

import iconGraduate from '../images/home/svg/graduate.svg';
import onlineEducation from '../images/home/png/image-online-education.png';
import iconRetail from '../images/home/svg/retail.svg';
import retail from '../images/home/png/image-retail.png';
import iconTravel from '../images/home/svg/travel.svg';
import travel from '../images/home/png/image-travel.png';

import brand1 from '../images/home/png/1195-px-marriott-vacation-club-svg.png';
import brand2 from '../images/home/png/celebrity-cruise.png';
import brand3 from '../images/home/png/amazon.png';
import brand4 from '../images/home/png/avis-vector-logo.png';
import brand5 from '../images/home/png/british-airways.png';
import brand6 from '../images/home/png/carnival-corporation-plc.png';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />

      <section className='text-center'>
        <Hero backgroundUrl={background}>
          <div className='flex flex-col justify-center'>
            <h1 className='mt-16'>
              Driven by technology, powered by expertise
            </h1>
            <p className='mt-6'>
              The most distinguished organizations recognize the edge of
              technological evolution. As trusted leaders at the forefront of
              technology progression, we help our customers stay competitive
              through innovative solutions and building capability.
            </p>
          </div>
        </Hero>

        <section className='mt-6 mx-auto w-11/12 '>
          <AsSeenOn />

          <p className='mt-12 big'>
            Helping you build a thriving digital business, both in what you do
            and how you do it through innovative solutions designed for:
          </p>

          <div className='px-2 mt-8 grid grid-flow-col grid-rows-4 grid-cols-2'>
            <TextBox
              text='Online education'
              imgSrc={iconGraduate}
              hasBottomBorder={false}
            />
            <ImageBox imgSrc={onlineEducation} arrowDirection='down' />

            <TextBox
              text='E-commerce'
              imgSrc={iconRetail}
              hasTopBorder={false}
              hasBottomBorder={false}
            />
            <ImageBox imgSrc={retail} arrowDirection='down' />

            <ImageBox imgSrc={travel} arrowDirection='up' />
            <TextBox text='Travel' imgSrc={iconTravel} hasTopBorder={false} />
          </div>
        </section>

        <section className='mt-12 mx-auto w-11/12 text-left bg-gray-100'>
          <h2 className='inline-block mt-10'>How we do it</h2>
          <p className='mt-3'>
            In a hyper-connected world, we adapt and empower business and
            individuals to compete through technology. We develop and execute
            technology solutions to improve our customers’ effective processes
            and dynamic outcomes. Ultimately, allowing them to become
            high-performance businesses.
          </p>

          <div className='-mx-3 mt-6'>
            <SpecialImage
              imgSrc={image}
              imgAlt='Man with laptop smiling while sitting on armchair'
            />
          </div>
        </section>

        <section className='mx-auto w-11/12 mt-12'>
          <h2 className='capitalize'>Brands we work with</h2>
          <p className='mt-6'>
            World-leading technology partners. We know that to deliver
            outstanding business outcomes for our clients, we need to work with
            the most reliable in the industry.
          </p>

          <div className='mt-7-5 grid grid-flow-row gap-3'>
            <div className='flex items-center justify-center space-x-4'>
              <img src={brand1} />
              <img src={brand2} />
              <img src={brand3} />
            </div>
            <div className='flex items-center justify-center space-x-4'>
              <img src={brand4} />
              <img src={brand5} />
              <img src={brand6} />
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default IndexPage;
