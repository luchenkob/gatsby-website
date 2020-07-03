import React from 'react';
import PropType from 'prop-types';
import Header from '../Header';

const Hero = ({ backgroundUrl, heading, text }) => {
  return (
    <section
      className='hero px-3 pt-3 md:px-8 text-left w-full bg-no-repeat bg-contain text-white'
      style={{ backgroundImage: `url(${backgroundUrl})`, height: '400px' }}
    >
      <Header />
      <div className='mt-5'>
        <h2 className='text-2xl font-bold'>{heading}</h2>
        <p className='mt-4 leading-snug text-xs'>{text}</p>
      </div>
    </section>
  );
};

Hero.propTypes = {
  backgroundUrl: PropType.string.isRequired,
  heading: PropType.string.isRequired,
  text: PropType.string,
};

export default Hero;
