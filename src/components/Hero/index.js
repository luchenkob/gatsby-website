import React from "react";
import PropType from "prop-types";
import Header from "../Header";

const Hero = ({ children }) => {
  return (
    <div className="hero text-left w-screen text-white h-400 lg:h-699 desktop:h-800">
      <div className="mx-auto w-11/12 h-full lg:w-full lg:px-130">
        <Header />
        <main className="md:w-3/5 h-full lg:w-full">{children}</main>
      </div>
    </div>
  );
};

Hero.propTypes = {
  children: PropType.node.isRequired,
};

export default Hero;
