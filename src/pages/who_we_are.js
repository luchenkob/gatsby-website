import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

import background from '../images/who_we_are/png/image-main.png';
import image from '../images/who_we_are/png/image.png';
import SpecialImage from '../components/SpecialImage';
import GraySection from '../components/GraySection';

function WhoWeArePage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Who We Are'
      />

      <section className='text-center'>
        <Hero backgroundUrl={background}>
          <div className='-mt-12 flex flex-col justify-center h-full'>
            <h1>
              Innovation
              <br />
              is in our DNA
            </h1>
          </div>
        </Hero>

        <GraySection
          text='Meliorism is a premier all-in-one technology solutions provider with
          a focus on delivering world-class, custom technology platforms that
          cater to the travel, online learning, and e-commerce transportation
          industries. Our sole aim is to provide cost-effective technology
          services.'
          secondText='Our team has a relentless focus on delivering scalable and reliable
          technology platforms, which can be the growth engine for aspiring
          digital companies.'
          childOnRight={false}
        >
          <SpecialImage
            imgSrc={image}
            imgAlt='Woman on her phone smiling sitting in a cafe'
            bubbleSide='right'
          />
        </GraySection>
      </section>
    </Layout>
  );
}

export default WhoWeArePage;
