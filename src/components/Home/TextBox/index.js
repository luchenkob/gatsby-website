import React from "react";
import PropType from "prop-types";

const TextBox = ({
  text,
  imgSrc,
  hasTopBorder = true,
  hasBottomBorder = true,
}) => {
  return (
    <div
      className={`xl:h-241 xl:w-1/3 p-4 xl:p-10 h-32 flex flex-col items-start border-gray-200 border-l border-r ${
        hasTopBorder ? "border-t" : ""
      } ${hasBottomBorder ? "border-b" : ""}`}
    >
      <h4 className="inline-block text-left xl:text-xl">{text}</h4>
      <img
        className="mt-8 xl:mt-22 xl:w-10 xl:h-8"
        src={imgSrc}
        alt={`${text} icon`}
      />
    </div>
  );
};

TextBox.propTypes = {
  text: PropType.string.isRequired,
  imgSrc: PropType.string.isRequired,
  hasTopBorder: PropType.bool,
  hasBottomBorder: PropType.bool,
};

export default TextBox;
