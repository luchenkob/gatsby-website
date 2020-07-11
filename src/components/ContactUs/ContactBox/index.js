import React from "react";
import PropTypes from "prop-types";
import {RichText} from 'prismic-reactjs'

import Button from "../../Button";

const ContactBox = ({ heading, text, svgUrl, toMail }) => {
  return (
    <div className="p-6 h-56 flex flex-col items-start justify-between lg:p-10 lg:w-1/3 lg:h-316">
      <div className="text-gray-700 text-left flex flex-col items-start">
        <img src={svgUrl} className="lg:h-8 lg:w-44px" alt="icon" />
        <h5 className="mt-4 lg:mt-6">{RichText.asText(heading)}</h5>
        <p className="mt-2 lg:mt-4">{RichText.asText(text)}</p>
      </div>

      <Button text="Contact Us" toMail={RichText.asText(toMail)} />
    </div>
  );
};

ContactBox.propTypes = {
  heading: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired,
  svgUrl: PropTypes.string.isRequired,
  toMail: PropTypes.object.isRequired,
};

export default ContactBox;
