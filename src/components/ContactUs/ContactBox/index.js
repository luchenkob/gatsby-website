import React from 'react';
import PropType from 'prop-types';

import ContactButton from '../../Button';

const ContactBox = ({ heading, text, svgUrl, toMail }) => {
  return (
    <div className='p-6 h-52 flex flex-col items-start justify-between'>
      <div className='text-gray-700 text-left flex flex-col items-start'>
        <img src={svgUrl} alt='icon' />
        <h4 className='mt-4'>{heading}</h4>
        <p className='mt-2'>{text}</p>
      </div>

      <ContactButton text='Contact Us' toMail={toMail} />
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
