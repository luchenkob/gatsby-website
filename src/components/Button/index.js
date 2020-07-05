import React from 'react';
import PropType from 'prop-types';

const Button = ({ text, toMail }) => {
  const handleClick = () => {
    window.location.href = `mailto:${toMail}`;
  };

  return (
    <button
      className='h-10 w-40 bg-purple text-white text-xs font-semibold'
      type='button'
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropType.string.isRequired,
  toMail: PropType.string.isRequired,
};

export default Button;
