import React from 'react';
import PropType from 'prop-types'

const ValueBox = ({ heading, text, svgUrl }) => {
  return (
    <div className='p-6 h-56 flex flex-col items-start justify-between'>
      <div className='text-gray-700 text-left flex flex-col'>
        <h4>{heading}</h4>
        <p className='mt-2'>{text}</p>
      </div>
      <img className='w-12 h-10' src={svgUrl} alt='icon' />
    </div>
  );
};

ValueBox.propTypes = {
  heading: PropType.string.isRequired,
  text: PropType.string.isRequired,
  svgUrl: PropType.string.isRequired,
};

export default ValueBox;
