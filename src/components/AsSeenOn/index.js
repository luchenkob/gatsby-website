import React from 'react';

import logoEntrepreneur from '../../images/brand_logos/entrepreneur@3x.png';
import logoForbes from '../../images/brand_logos/forbes-logo-svg@3x.png';
import logoYahooNews from '../../images/brand_logos/yahoo-news-light@3x.png';
import logoABCNews from '../../images/brand_logos/1200-px-abc-news-solid-black-logo-svg@3x.png';

const AsSeenOn = () => {
  return (
    <div className='mt-4 flex flex-col lg:flex-row space-y-4 lg:items-center justify-between lg:justify-start mx-auto lg:space-x-22 lg:mt-22'>
      <span className='text-xs tracking-wide uppercase lg:pt-4'>As seen on</span>
      <div className='lg:hidden flex items-start justify-center space-x-6'>
        <img alt="Brand logo" src={logoForbes} />
        <img alt="Brand logo" src={logoEntrepreneur} />
      </div>
      <div className='lg:hidden flex items-center justify-center space-x-6'>
        <img alt="Brand logo" src={logoYahooNews} />
        <img alt="Brand logo" src={logoABCNews} />
      </div>

      <img className='hidden  lg:block pb-1 w-93 h-6' alt="Brand logo" src={logoForbes} />
      <img className='hidden  lg:block w-162 h-8' alt="Brand logo" src={logoEntrepreneur} />
      <img className='hidden  lg:block w-183 h-30px' alt="Brand logo" src={logoYahooNews} />
      <img className='hidden  lg:block w-144 h-51px' alt="Brand logo" src={logoABCNews} />
    </div>
  );
};

export default AsSeenOn;
