import React from 'react';
import PropType from 'prop-types';

import Header from '../Header';

const GoogleDrivePDF = ({ title, docId }) => {
  console.log(docId);
  return (
    <>
      <div className='mx-auto w-11/12 h-full xl:w-full px-10px xl:px-130'>
        <Header isBackgroundWhite={true} />
      </div>
      <div className='mx-auto w-10/12 text-center'>
        <h3 className='mt-12 xl:mt-22'>{title}</h3>
        <iframe
          className='w-full h-64 mt-6 xl:mt-10 xl:h-800'
          allowFullScreen={true}
          src={`https://docs.google.com/viewer?srcid=${docId}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`}
        ></iframe>
      </div>
    </>
  );
};

GoogleDrivePDF.propTypes = {
  title: PropType.string.isRequired,
  docId: PropType.string.isRequired,
};

export default GoogleDrivePDF;
