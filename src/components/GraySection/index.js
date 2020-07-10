import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

const GraySection = ({
  heading,
  text,
  children,
  childOnRight = true,
  widthOfText,
}) => (
  <section className='mt-12 text-left lg:flex lg:mt-52 lg:pt-110'>
    {!childOnRight && (
      <div className='mt-6 lg:w-1/2 lg:-mt-6 xl:-mt-110'>{children}</div>
    )}
    <div className='bg-gray-100 w-screen lg:w-1/2'>
    <div
      className={`${
        widthOfText ? 'lg:w-1/2  xl:w-580' : 'xl:w-1/2'
      } bg-gray-100 pt-10 mx-auto w-11/12 lg:max-w-md lg:self-center lg:pt-40 xl:mt-0 xl:max-w-none`}
    >
      {heading && <h2 className='inline-block xl:mb-10'>{RichText.asText(heading)}</h2>}
      {text && (
        <div className='mt-3 xl:mt-0 space-y-4'>{RichText.render(text)}</div>
      )}
    </div>
    </div>

    {childOnRight && (
      <div className='mt-6 lg:w-1/2 lg:-mt-6 xl:-mt-110'>{children}</div>
    )}
  </section>
);

GraySection.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  secondText: PropTypes.string,
  children: PropTypes.node,
  childOnRight: PropTypes.bool,
  widthOfText: PropTypes.string,
};

export default GraySection;
