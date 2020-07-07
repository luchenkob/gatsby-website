import React from 'react';
import PropType from 'prop-types';

const SpecialImage = ({
  imgSrc,
  imgAlt,
  bubbleRight = true,
  bubbleSide = 'left',
  bubbleSize,
  bubbleHigh = false,
}) => (
  <div className='relative'>
    <img className='block w-screen lg:h-full' src={imgSrc} alt={imgAlt} />
    <div
      className={`md:hidden absolute z-10 -mt-4 bg-purple h-8 w-8 rounded-full ${
        bubbleRight ? 'right-0 mr-8' : 'left-0 ml-8'
      }`}
    ></div>

    {bubbleHigh ? (
      <div
        className={`hidden md:block absolute z-10 -mt-4 bg-purple h-10 w-10 lg:h-24 lg:w-24 rounded-full ${
          bubbleSide === 'right'
            ? 'right-0 top-0 -mr-5 -mt-20 lg:-mr-12 lg:mt-48'
            : 'left-0 -ml-5 -mt-20 lg:-ml-12 lg:mt-48'
        }`}
      ></div>
    ) : bubbleSize ? (
      <div
        className={`hidden md:block absolute z-10 -mt-4 bg-purple h-10 w-10 lg:h-16 lg:w-16 rounded-full ${
          bubbleSide === 'right'
            ? 'right-0 -mr-5 -mt-20 lg:-mr-8 lg:-mt-40'
            : 'left-0 -ml-5 -mt-20 lg:-ml-8 lg:-mt-40'
        }`}
      ></div>
    ) : (
      <div
        className={`hidden md:block absolute z-10 -mt-4 bg-purple h-10 w-10 lg:h-24 lg:w-24 rounded-full ${
          bubbleSide === 'right'
            ? 'right-0 -mr-5 -mt-20 lg:-mr-12 lg:-mt-48'
            : 'left-0 -ml-5 -mt-20 lg:-ml-12 lg:-mt-48'
        }`}
      ></div>
    )}
  </div>
);

SpecialImage.propTypes = {
  imgSrc: PropType.string.isRequired,
  imgAlt: PropType.string.isRequired,
  bubbleRight: PropType.bool,
  bubbleSide: PropType.string,
  bubbleSize: PropType.string,
  bubbleHigh: PropType.bool,
};

export default SpecialImage;
