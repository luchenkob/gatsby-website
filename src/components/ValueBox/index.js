import React from 'react';
import PropType from 'prop-types'

const ValueBox = ({ heading, text, svgUrl }) => {
  return (
    <div className='p-6 h-56 flex flex-col items-start justify-between'>
      <div className='text-gray-700 text-left text-sm flex flex-col'>
        <h4 className='font-semibold'>{heading}</h4>
        <p className='mt-1'>{text}</p>
      </div>
      <img src={svgUrl} alt='icon' />
    </div>
  );
};

ValueBox.propTypes = {
  heading: PropType.string.isRequired,
  text: PropType.string.isRequired,
  svgUrl: PropType.string.isRequired,
};

export default ValueBox;
