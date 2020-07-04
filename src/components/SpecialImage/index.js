import React from 'react';
import PropType from 'prop-types';

const SpecialImage = ({ imgSrc, imgAlt, bubbleRight = true }) => (
  <div className='relative'>
    <img className='block w-screen' src={imgSrc} alt={imgAlt} />
    <div
      className={`absolute z-10 -mt-4 bg-purple h-8 w-8 rounded-full ${
        bubbleRight ? 'right-0 mr-8' : 'left-0 ml-8'
      }`}
    ></div>
  </div>
);

SpecialImage.propTypes = {
  imgSrc: PropType.string.isRequired,
  imgAlt: PropType.string.isRequired,
  bubbleRight: PropType.bool,
};

export default SpecialImage;
