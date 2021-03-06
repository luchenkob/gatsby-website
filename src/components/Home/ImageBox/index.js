import React from "react";
import PropTypes from "prop-types";

const ImageBox = ({ arrowDirection, imgSrc }) => {
  return (
    <div className="h-32 relative xl:w-1/3 xl:h-241">
      <img
        className="absolute w-full h-full object-cover"
        src={imgSrc}
        alt="Icon"
      />

      {arrowDirection === "down" && (
        <div className="absolute top-0 z-20 w-full">
          <svg
            className="w-10px h-5px xl:h-10px xl:w-20px block mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 5"
          >
            <path
              fill="#FFF"
              d="M70 359L75 364 65 364z"
              transform="matrix(1 0 0 -1 -65 364)"
            />
          </svg>
        </div>
      )}
      {arrowDirection === "up" && (
        <div className="absolute bottom-0 z-20 w-full">
          <svg
            className="block mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="5"
            viewBox="0 0 10 5"
          >
            <path
              fill="#FFF"
              d="M210 115L215 120 205 120z"
              transform="translate(-205 -115)"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

ImageBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  arrowDirection: PropTypes.string.isRequired,
};

export default ImageBox;
