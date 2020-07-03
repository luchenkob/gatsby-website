import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import TextBox from '../components/textBox';
import ImageBox from '../components/imageBox'

import background from '../images/image.jpg';
import logoEntrepreneur from '../images/brand_logos/entrepreneur.png';
import logoForbes from '../images/brand_logos/forbes-logo-svg.png';
import logoYahooNews from '../images/brand_logos/yahoo-news-light.png';
import logoABCNews from '../images/brand_logos/1200-px-abc-news-solid-black-logo-svg.png';

import iconGraduate from '../images/svg/graduate.svg';
import onlineEducation from '../images/png/image-online-education.png';
import iconRetail from '../images/svg/retail.svg';
import retail from '../images/png/image-retail.png';
import iconTravel from '../images/svg/travel.svg';
import travel from '../images/png/image-travel.png';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />

      <section className='text-center'>
        <section
          className='hero p-3 md:p-8 text-left w-full bg-no-repeat bg-contain'
          style={{ backgroundImage: `url(${background})`, height: '400px' }}
        >
          <Header />
          <div className='mt-12'>
            <h2 className='my-4 text-2xl font-bold'>
              Driven by technology, powered by expertise
            </h2>
            <p className='leading-snug text-xs'>
              The most distinguished organizations recognize the edge of
              technological evolution. As trusted leaders at the forefront of
              technology progression, we help our customers stay competitive
              through innovative solutions and building capability.
            </p>
          </div>
        </section>

        <section className='mt-6 p-3 tracking-tight'>
          <h3 className='text-gray-700 text-xs tracking-wide uppercase'>
            As seen on
          </h3>
          <div className='mt-6 grid grid-flow-row gap-3'>
            <div className='flex items-start justify-center space-x-8'>
              <img src={logoForbes} />
              <img src={logoEntrepreneur} />
            </div>
            <div className='flex items-center justify-center space-x-8'>
              <img src={logoYahooNews} />
              <img src={logoABCNews} />
            </div>
          </div>

          <p className='mt-16 text-gray-700 font-light'>
            Helping you build a thriving digital business, both in what you do
            and how you do it through innovative solutions designed for:
          </p>

          <div className='px-2 mt-8 grid grid-flow-col grid-rows-4 grid-cols-2'>
            <TextBox text='Online education' imgSrc={iconGraduate} hasBottomBorder={false} />
            <ImageBox imgSrc={onlineEducation} arrowDirection="down"/>

            <TextBox text='E-commerce' imgSrc={iconRetail} hasTopBorder={false}
            hasBottomBorder={false} />
            <ImageBox imgSrc={retail} arrowDirection="down"/>

            <ImageBox imgSrc={travel} arrowDirection="up"/>
            <TextBox text='Travel' imgSrc={iconTravel} hasTopBorder={false} />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default IndexPage;
