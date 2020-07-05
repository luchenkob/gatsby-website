import React from 'react';

import logoEntrepreneur from '../../images/brand_logos/entrepreneur.png';
import logoForbes from '../../images/brand_logos/forbes-logo-svg.png';
import logoYahooNews from '../../images/brand_logos/yahoo-news-light.png';
import logoABCNews from '../../images/brand_logos/1200-px-abc-news-solid-black-logo-svg.png';

const AsSeenOn = () => {
  return (
    <div className='mt-4 flex flex-col md:flex-row space-y-4 md:items-center justify-between md:w-3/4 max-w-3xl mx-auto md:space-x-0'>
      <span className='text-xs tracking-wide uppercase self-end pb-2'>As seen on</span>
      <div className='md:hidden flex items-start justify-center space-x-6'>
        <img src={logoForbes} />
        <img src={logoEntrepreneur} />
      </div>
      <div className='md:hidden flex items-center justify-center space-x-6'>
        <img src={logoYahooNews} />
        <img src={logoABCNews} />
      </div>

      <img className='hidden  md:block pb-1' src={logoForbes} />
      <img className='hidden  md:block' src={logoEntrepreneur} />
      <img className='hidden  md:block' src={logoYahooNews} />
      <img className='hidden  md:block' src={logoABCNews} />
    </div>
  );
};

export default AsSeenOn;
