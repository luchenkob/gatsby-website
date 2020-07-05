import React from 'react';
import { Link } from 'gatsby';

import facebook from '../../images/svg/fb.svg';
import instagram from '../../images/svg/insta.svg';
import linkedin from '../../images/svg/linkedin_2.svg';
import twitter from '../../images/svg/twitter_2.svg';

const Footer = () => {
  return (
    <footer className='mt-16 py-8 bg-gray-600 text-gray-300 text-xs'>
      <nav className='mx-auto w-11/12 grid grid-cols-2 gap-12'>
        <div className='flex flex-col space-y-4'>
          <div>
            <div className='caption uppercase text-gray-400'>Products</div>
            <ul className='mt-2 flex flex-col space-y-2'>
              {[
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
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    className='block text-gray-800 no-underline'
                    to={link.route}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=' col-span-2'>
            <Link
              className='block text-gray-800 no-underline'
              to={'/careers'}
            >
              Careers
            </Link>
          </div>

          <ul className='flex flex-col space-y-2'>
            {[
              {
                route: `/`,
                title: `Terms of Use`,
              },
              {
                route: `/`,
                title: `Policies & Procedures`,
              },
            ].map((link) => (
              <li key={link.title}>
                <Link
                  className='block text-gray-800 no-underline'
                  to={link.route}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col justify-between'>
          <div>
            <div className='caption uppercase text-gray-400'>About us</div>
            <ul className='mt-2 flex flex-col space-y-2'>
              {[
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
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    className='block text-gray-800 no-underline'
                    to={link.route}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className='flex flex-col space-y-2'>
            {[
              {
                route: `/`,
                title: `Privacy Policy`,
              },
              {
                route: `/`,
                title: `GDPR Policy`,
              },
            ].map((link) => (
              <li key={link.title}>
                <Link
                  className='block text-gray-800 no-underline'
                  to={link.route}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <ul className='mx-auto w-11/12 mt-6 flex space-x-4 col-span-2'>
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
