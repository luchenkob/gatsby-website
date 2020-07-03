import React from 'react';

import facebook from '../images/svg/fb.svg';
import instagram from '../images/svg/insta.svg';
import linkedin from '../images/svg/linkedin_2.svg';
import twitter from '../images/svg/twitter_2.svg';

const Footer = () => {
  return (
    <footer className='mt-12 px-3 py-8 bg-gray-600 text-gray-300 text-xs'>
      <nav className='grid grid-cols-2 gap-12'>
        <div className='flex flex-col space-y-4'>
          <div>
            <div className='caption uppercase text-gray-400'>Products</div>
            <ul className='mt-2 flex flex-col space-y-1'>
              <li>E-learning</li>
              <li>Travel</li>
              <li>E-commerce</li>
            </ul>
          </div>

          <div className=' col-span-2'>Careers</div>

          <ul className='flex flex-col space-y-1'>
            <li>Terms of Use</li>
            <li>Policies & Procedures</li>
          </ul>
        </div>

        <div className='flex flex-col justify-between'>
          <div>
            <div className='caption uppercase text-gray-400'>About us</div>
            <ul className='mt-2 flex flex-col space-y-1'>
              <li>Who we are</li>
              <li>Team and Values</li>
              <li>Contact us</li>
            </ul>
          </div>

          <ul className='flex flex-col space-y-1'>
            <li>Privacy Policy</li>
            <li>GDPR Policy</li>
          </ul>
        </div>

      </nav>
        <ul className='mt-6 flex space-x-4 col-span-2'>
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
