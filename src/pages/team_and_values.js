import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import AsSeenOn from '../components/AsSeenOn';
import ValueBox from '../components/ValueBox';
import SpecialImage from '../components/SpecialImage';

import background from '../images/team_and_values/png/image-main.png';
import image from '../images/team_and_values/png/image.png';

import iconInnovation from '../images/team_and_values/svg/icon-innovation.svg';
import iconPeople from '../images/team_and_values/svg/icon-people.svg';
import iconSearch from '../images/team_and_values/svg/icon-search.svg';

function TeamAndValuesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Team and Values'
      />

      <section className='text-center'>
        <Hero backgroundUrl={background}>
          <div className='mt-5'>
            <h1 className='text-2xl font-bold'>
              Leaders, Innovators, Creators, and Storytellers. All Under One
              Roof.
            </h1>
            <p className='mt-4 leading-snug text-xs'>
              We&apos;re a team of creators, innovators, and storytellers, based
              in the city of the future, Dubai, UAE. We come from all different
              backgrounds and have a wide variety of interests but are all
              driven by our love for technology.
            </p>
          </div>
        </Hero>

        <section className='mt-12 px-3 bg-gray-100'>
          <p className='inline-block mt-10'>
            Today, we have over 150 dedicated, passionate, and professional
            people employed in our numerous offices across Dubai and beyond. Our
            dynamic in-house team is composed of departments that drive
            exceptional experiences for our customers--from Marketing to Tech,
            Finance, Legal, and Support.
          </p>
          <div className='-mx-3 mt-6'>
          <SpecialImage imgSrc={image} imgAlt='Women looking at phone' />
          </div>
        </section>

        <section className='mt-16 px-3 tracking-tight'>
          <AsSeenOn />
        </section>

        <section className='mt-12 px-3 tracking-tight'>
          <h2>Our Values</h2>
          <div className='mt-8 border-gray-200 border divide-y divide-gray-200'>
            <ValueBox
              heading='Innovation is our constant'
              text='Doing things better is a challenge, and demands constant evaluation and experimentation. We don’t standstill.'
              svgUrl={iconInnovation}
            />
            <ValueBox
              heading='People are our engine'
              text='Technological innovation is driven by people. We each take pride in what we deliver and we are inspired by the contributions of others.'
              svgUrl={iconPeople}
            />
            <ValueBox
              heading='Insight is out guide'
              text='Understanding the needs of others is critical to doing great work. We make an impact when we invest in knowing our clients and our team..'
              svgUrl={iconSearch}
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default TeamAndValuesPage;
