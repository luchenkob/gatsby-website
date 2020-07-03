import React from 'react';
import PropType from 'prop-types'
import Header from '../Header'

const Hero = ({ backgroundUrl, children }) => {
  return <section
    className='hero px-3 pt-3 md:px-8 text-left w-full bg-no-repeat bg-contain text-white'
    style={{ backgroundImage: `url(${backgroundUrl})`, height: '400px' }}
  >
    <Header />
    {children}
  </section>;
};

Hero.propTypes = {
    backgroundUrl: PropType.string.isRequired,
    children: PropType.node.isRequired,
}

export default Hero;
