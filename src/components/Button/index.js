import React from 'react';
import PropType from 'prop-types';

const Button = ({ text, handleClick }) => {
  return (
    <button
      className='px-6 py-2-75 bg-purple text-white text-xs'
      type='button'
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropType.string.isRequired,
  handleClick: PropType.func
};

export default Button;
