import React from 'react';
import PropType from 'prop-types';
import Header from '../Header';

const Hero = ({ backgroundUrl, children }) => {
  return (
    <div
      className='hero pt-3 text-left w-screen bg-center bg-no-repeat text-white bg-cover h-400 lg:h-800'
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className='mx-auto w-11/12 h-full'>
        <Header />
        <main className=' md:w-3/5 h-full'>{children}</main>
      </div>
      
    </div>
  );
};

Hero.propTypes = {
  backgroundUrl: PropType.string.isRequired,
  children: PropType.node.isRequired,
};

export default Hero;
