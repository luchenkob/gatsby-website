import React from "react";
import PropTypes from "prop-types";
import {RichText} from 'prismic-reactjs'

const ValueBox = ({ heading, text, svgUrl }) => {
  return (
    <div className="p-6 h-56 xl:h-320 flex flex-col items-start xl:w-1/3 xl:p-10">
      <div className="text-gray-700 text-left flex flex-col">
        <h5>{RichText.asText(heading)}</h5>
        <p className="mt-2 xl:mt-4">{RichText.asText(text)}</p>
      </div>
      <img
        className="mt-8 xl:mt-auto w-auto h-10 xl:w-16 xl:h-12"
        src={svgUrl}
        alt="icon"
      />
    </div>
  );
};

ValueBox.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  svgUrl: PropTypes.string.isRequired,
};

export default ValueBox;
