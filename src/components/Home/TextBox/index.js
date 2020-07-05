import React from 'react';
import PropType from 'prop-types';

const TextBox = ({ text, imgSrc, hasTopBorder = true, hasBottomBorder = true }) => {
  return (
    <div
      className={`md:h-48 md:w-1/3 p-4 h-32 flex flex-col items-start justify-between border-gray-200 border-l border-r ${
        hasTopBorder ? 'border-t' : ''
      } ${hasBottomBorder ? 'border-b' : ''}`}
    >
      <h4 className='inline-block text-left'>
        {text}
      </h4>
      <img className='md:h-5 lg:h-6' src={imgSrc} alt={`${text} icon`} />
    </div>
  );
};

TextBox.propTypes = {
  text: PropType.string.isRequired,
  imgSrc: PropType.string.isRequired,
  hasTopBorder: PropType.bool,
  hasBottomBorder: PropType.bool
};

export default TextBox;
