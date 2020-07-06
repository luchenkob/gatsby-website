import React from 'react';

import MobileFooter from './MobileFooter';
import DesktopFooter from './DesktopFooter'

import facebook from '../../images/svg/fb.svg';
import instagram from '../../images/svg/insta.svg';
import linkedin from '../../images/svg/linkedin_2.svg';
import twitter from '../../images/svg/twitter_2.svg';

const Footer = () => {
  const links = {
    products: [
      {
        route: `/e-learning`,
        title: `E-learning`,
      },
      {
        route: `/travel`,
        title: `Travel`,
      },
      {
        route: `/e-commerce`,
        title: `E-commerce`,
      },
    ],
    'about us': [
      {
        route: `/who_we_are`,
        title: `Who we are`,
      },
      {
        route: `/team_and_values`,
        title: `Team and Values`,
      },
      {
        route: `/contact_us`,
        title: `Contact Us`,
      },
    ],
  };

  return (
    <footer className='mt-16 md:mt-40 py-8 md:py-16 bg-gray-600 text-gray-300'>
      <div className='lg:hidden'>
        <MobileFooter links={links} />
      </div>
      <div className='hidden lg:block'>
        <DesktopFooter links={links} />
      </div>
      <ul className='mx-auto w-4/5 mt-6 flex justify-start  space-x-4 lg:space-x-6 lg:mt-10 col-span-2 lg:w-1260'>

        <li>
          <img src={facebook} />
        </li>
        <li>
          <img src={instagram} />
        </li>
        <li>
          <img src={linkedin} />
        </li>
        <li>
          <img src={twitter} />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
