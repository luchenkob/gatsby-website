import React from 'react';

import logoEntrepreneur from '../../images/brand_logos/entrepreneur.png';
import logoForbes from '../../images/brand_logos/forbes-logo-svg.png';
import logoYahooNews from '../../images/brand_logos/yahoo-news-light.png';
import logoABCNews from '../../images/brand_logos/1200-px-abc-news-solid-black-logo-svg.png';

const AsSeenOn = () => {
  return (
    <>
      <span className='text-xs tracking-wide uppercase'>As seen on</span>
      <div className='mt-4 grid grid-flow-row gap-4'>
        <div className='flex items-start justify-center space-x-6'>
          <img src={logoForbes} />
          <img src={logoEntrepreneur} />
        </div>
        <div className='flex items-center justify-center space-x-6'>
          <img src={logoYahooNews} />
          <img src={logoABCNews} />
        </div>
      </div>
    </>
  );
};

export default AsSeenOn;
