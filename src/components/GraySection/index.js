import React from 'react';
import PropType from 'prop-types';

const GraySection = ({
  heading,
  text,
  secondText,
  children,
  childOnRight = true,
}) => (
  <section className='mt-12 text-left bg-gray-100 md:flex md:mt-52'>
    {!childOnRight && <div className='mt-6 md:w-1/2 md:-mt-16'>{children}</div>}
    <div className='mt-10 mx-auto w-11/12 md:w-1/2 lg:w-580 md:self-center md:mt-0'>
      <h2 className='inline-block'>{heading}</h2>
      {text && <p className='mt-3'>{text}</p>}
      {secondText && (
        <>
          <br /> <p>{secondText}</p>
        </>
      )}
    </div>

    {childOnRight && <div className='mt-6 md:w-1/2 md:-mt-16'>{children}</div>}
  </section>
);

GraySection.propTypes = {
  heading: PropType.string.isRequired,
  text: PropType.string,
  secondText: PropType.string,
  children: PropType.node,
  childOnRight: PropType.bool,
};

export default GraySection;
