import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, toMail }) => {
  const handleClick = () => {
    window.location.href = `mailto:${toMail}`;
  };

  return (
    <button
      className="h-10 w-40 xl:h-14 xl:w-52 bg-purple text-white font-semibold transition-colors duration-200 ease-in-out hover:bg-darkPurple"
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  toMail: PropTypes.string.isRequired,
};

export default Button;
