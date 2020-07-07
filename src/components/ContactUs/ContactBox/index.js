import React from 'react';
import PropType from 'prop-types';

import Button from '../../Button';

const ContactBox = ({ heading, text, svgUrl, toMail }) => {
  return (
    <div className='p-6 h-56 flex flex-col items-start justify-between lg:p-10 lg:w-1/3 lg:h-316'>
      <div className='text-gray-700 text-left flex flex-col items-start'>
        <img src={svgUrl} className='lg:h-8 lg:w-44px' alt='icon' />
        <h5 className='mt-4 lg:mt-6'>{heading}</h5>
        <p className='mt-2 lg:mt-4'>{text}</p>
      </div>

      <Button text='Contact Us' toMail={toMail} />
    </div>
  );
};

ContactBox.propTypes = {
  heading: PropType.string.isRequired,
  text: PropType.string.isRequired,
  svgUrl: PropType.string.isRequired,
  toMail: PropType.string.isRequired,
};

export default ContactBox;
