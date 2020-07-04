import React from 'react';
import PropType from 'prop-types';

import ContactButton from '../ContactButton';

const ContactBox = ({ heading, text, svgUrl, toMail }) => {
  return (
    <div className='p-6 h-52 flex flex-col items-start justify-between'>
      <div className='text-gray-700 text-left text-sm flex flex-col items-start'>
        <img src={svgUrl} alt='icon' />
        <h4 className='mt-3 font-semibold'>{heading}</h4>
        <p className='mt-1'>{text}</p>
      </div>

      <ContactButton toMail={toMail} />
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
