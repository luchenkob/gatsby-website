import React from "react";
import PropType from "prop-types";

const GraySection = ({
  heading,
  text,
  secondText,
  children,
  childOnRight = true,
  widthOfText,
}) => (
  <section className="mt-12 text-left bg-gray-100 lg:flex lg:mt-52">
    {!childOnRight && (
      <div className="mt-6 lg:w-1/2 lg:-mt-6 xl:-mt-110">{children}</div>
    )}
    <div
      className={`${
        widthOfText ? "lg:w-1/2  xl:w-580" : "xl:w-1/2"
      } pt-10 mx-auto w-11/12 lg:max-w-md lg:self-center xl:pt-40 xl:mt-0 xl:max-w-none`}
    >
      {heading && <h2 className="inline-block">{heading}</h2>}
      {text && <p className="mt-3 xl:mt-0">{text}</p>}
      {secondText && (
        <>
          <br /> <p>{secondText}</p>
        </>
      )}
    </div>

    {childOnRight && <div className="mt-6 lg:w-1/2 lg:-mt-6 xl:-mt-110">{children}</div>}
  </section>
);

GraySection.propTypes = {
  heading: PropType.string,
  text: PropType.string,
  secondText: PropType.string,
  children: PropType.node,
  childOnRight: PropType.bool,
  widthOfText: PropType.string,
};

export default GraySection;
