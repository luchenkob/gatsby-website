import React from 'react';
import PropType from 'prop-types';

const TextBox = ({ text, imgSrc, hasTopBorder = true, hasBottomBorder = true }) => {
  return (
    <div
      className={`p-4 h-32 flex flex-col items-start justify-between border-gray-200 border-l border-r ${
        hasTopBorder ? 'border-t' : ''
      } ${hasBottomBorder ? 'border-b' : ''}`}
    >
      <span className='inline-block text-gray-700 font-semibold text-left text-sm'>
        {text}
      </span>
      <img src={imgSrc} alt={`${text} icon`} />
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
