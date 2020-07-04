import React from 'react';
import PropType from 'prop-types';

const ContactButton = ({ toMail }) => {
  const handleClick = () => {
    window.location.href = `mailto:${toMail}`;
  };

  return (
    <button
      className='px-6 py-2-75 bg-purple text-white text-xs'
      type='button'
      onClick={handleClick}
    >
      Contact Us
    </button>
  );
};

ContactButton.propTypes = {
  toMail: PropType.string.isRequired,
};

export default ContactButton;
