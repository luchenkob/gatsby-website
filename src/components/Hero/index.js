import React from 'react';
import PropType from 'prop-types';
import Header from '../Header';

const Hero = ({ backgroundUrl, children }) => {
  return (
    <div
      className='hero pt-3 text-left w-screen bg-center bg-no-repeat text-white bg-cover'
      style={{ backgroundImage: `url(${backgroundUrl})`, height: '400px' }}
    >
      <div className='mx-auto w-11/12'>
        <Header />
        <main className='md:w-3/5 md:max-w-sm lg:max-w-md xl:max-w-xl'>{children}</main>
      </div>
    </div>
  );
};

Hero.propTypes = {
  backgroundUrl: PropType.string.isRequired,
  children: PropType.node.isRequired,
};

export default Hero;
