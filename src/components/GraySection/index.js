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
  <section className='mt-12 text-left bg-gray-100 lg:flex lg:mt-52'>
    {!childOnRight && (
      <div className='mt-6 lg:w-1/2 lg:-mt-6 xl:-mt-110'>{children}</div>
    )}
    <div
      className={`${
        widthOfText ? 'lg:w-1/2  xl:w-580' : 'xl:w-1/2'
      } pt-10 mx-auto w-11/12 lg:max-w-md lg:self-center xl:pt-40 xl:mt-0 xl:max-w-none`}
    >
      {heading && <h2 className='inline-block'>{RichText.asText(heading)}</h2>}
      {/* If there are two paragraphs in text, add a <br /> in between */}
      {text && text.length === 1 ? (
        <p className='mt-3 xl:mt-0'>{RichText.asText(text)}</p>
      ) : (
        <p className='mt-3 xl:mt-0'>{text[0].text}</p>
      )}
      {text.length > 1 && (
        <>
          <br /> <p>{text[1].text}</p>
        </>
      )}
    </div>

    {childOnRight && (
      <div className='mt-6 lg:w-1/2 lg:-mt-6 xl:-mt-110'>{children}</div>
    )}
  </section>
);

GraySection.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  secondText: PropTypes.string,
  children: PropTypes.node,
  childOnRight: PropTypes.bool,
  widthOfText: PropTypes.string,
};

export default GraySection;
