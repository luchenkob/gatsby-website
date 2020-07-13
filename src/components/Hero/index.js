import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";

const Hero = ({ children }) => {
  return (
    <div className="relative hero text-left w-screen text-white h-400 lg:h-699 desktop:h-800">
      <div className="mx-auto w-11/12 h-full lg:w-full lg:px-130">
        <Header />
        <main className="absolute z-10 top-0 w-full pr-5 text-left md:w-3/5 h-full xl:w-full xl:pr-0">{children}</main>
      </div>
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
