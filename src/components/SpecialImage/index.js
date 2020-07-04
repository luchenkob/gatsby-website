import React from 'react';
import PropType from 'prop-types';

const SpecialImage = ({ imgSrc, imgAlt }) => (
  <div className='relative'>
    <img className='block mt-6 w-screen' src={imgSrc} alt={imgAlt} />
    <div className='absolute right-0 z-10 -mt-4 mr-8 bg-purple h-8 w-8 rounded-full'></div>
  </div>
);

SpecialImage.propTypes = {
  imgSrc: PropType.string.isRequired,
  imgAlt: PropType.string.isRequired,
};

export default SpecialImage;
