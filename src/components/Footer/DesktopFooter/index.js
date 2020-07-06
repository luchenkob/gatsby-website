import React from 'react';
import PropType from 'prop-types';
import { Link } from 'gatsby';

const DesktopFooter = ({ links }) => (
  <nav className='mx-auto flex justify-center space-x-580'>
    <div className='grid grid-cols-3 grid-flow-col gap-12'>
      <div>
        <div className='caption uppercase text-gray-400 space-x-156'>Products</div>
        <ul className='mt-2 flex flex-col space-y-2'>
          {links['products'].map((link) => (
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

      <div>
        <div className='caption uppercase text-gray-400'>About us</div>
        <ul className='mt-2 flex flex-col space-y-2'>
          {links['about us'].map((link) => (
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
      <Link className='block text-gray-800 no-underline' to={'/careers'}>
        Careers
      </Link>
    </div>

    <div>
      <ul className='flex flex-col space-y-2'>
        {[
          {
            route: `/`,
            title: `Terms of Use`,
          },
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
            <Link className='block text-gray-800 no-underline' to={link.route}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

DesktopFooter.propTypes = {
  links: PropType.object.isRequired,
};

export default DesktopFooter;
