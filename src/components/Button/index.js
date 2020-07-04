import React from 'react';
import PropType from 'prop-types';

const Button = ({ text, handleClick }) => {
  return (
    <button
      className='h-10 w-40 bg-purple text-white text-xs'
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
