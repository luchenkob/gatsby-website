import React from 'react';
import PropType from 'prop-types';
import Header from '../Header';

const Hero = ({ backgroundUrl, children }) => {
  console.log(backgroundUrl)
  return (
    <div
      className='hero pt-3 text-left w-screen text-white h-400 xl:h-800'
    >
      <div className='mx-auto w-11/12 h-full'>
        <Header />
        <main className=' md:w-3/5 h-full lg:w-860'>{children}</main>
      </div>
      
    </div>
  );
};

Hero.propTypes = {
  backgroundUrl: PropType.string.isRequired,
  children: PropType.node.isRequired,
};

export default Hero;
