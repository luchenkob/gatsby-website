import React from "react";
import PropType from "prop-types";

const ValueBox = ({ heading, text, svgUrl }) => {
  return (
    <div className="p-6 h-56 lg:h-320 flex flex-col items-start lg:w-1/3 lg:p-10">
      <div className="text-gray-700 text-left flex flex-col">
        <h5>{heading}</h5>
        <p className="mt-2 md:mt-4">{text}</p>
      </div>
      <img
        className="mt-8 lg:mt-auto w-12 h-10 lg:w-16 lg:h-12"
        src={svgUrl}
        alt="icon"
      />
    </div>
  );
};

ValueBox.propTypes = {
  heading: PropType.string.isRequired,
  text: PropType.string.isRequired,
  svgUrl: PropType.string.isRequired,
};

export default ValueBox;
