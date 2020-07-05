import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';

import logoWhite from '../../images/menu/logo-white.png';
import logoPurple from '../../images/menu/logo-purple.png';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'none';
    }
  }, []);

  return (
    <header className='bg-transparent'>
      <div className='relative flex flex-wrap items-center justify-between max-w-4xl pt-2 pb-4 mx-auto border-b'>
        <Link to='/'>
          <span className='text-xl font-bold tracking-tight'>
            <img className='h-6' src={logoWhite} />
          </span>
        </Link>

        <button
          className='flex items-center text-white focus:outline-none md:hidden'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='11'
            viewBox='0 0 16 11'
          >
            <path
              fill='#FFF'
              d='M16 10v1H0v-1h16zm0-5v1H0V5h16zm0-5v1H0V0h16z'
            />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className='fixed z-20 inset-0 bg-white w-screen h-full overflow-hidden px-3 pt-3 md:px-8 text-left'>
          <div className='relative flex flex-wrap items-center justify-between max-w-4xl pt-2 pb-4 mx-auto border-b'>
            <Link to='/'>
              <span className='text-xl font-bold tracking-tight'>
                <img className='h-6' src={logoPurple} />
              </span>
            </Link>

            <button
              className='flex items-center text-white focus:outline-none md:hidden'
              onClick={() => toggleExpansion(!isExpanded)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 12 12'
              >
                <path
                  fill='#131414'
                  d='M11.294 0L12 .706 6.705 6 12 11.294l-.706.706L6 6.705.706 12 0 11.294 5.294 6 0 .706.706 0 6 5.294 11.294 0z'
                />
              </svg>
            </button>
          </div>
          <nav className='flex flex-col text-xs'>
            <div className='mt-6 caption uppercase text-menuGray'>Products</div>
            <ul
              className={`${
                isExpanded ? `block` : `hidden`
              } mt-4 text-gray-700 md:flex md:items-center w-full space-y-4`}
            >
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
                    className='block text-gray-800 no-underline md:inline-block md:mt-0 md:ml-6'
                    to={link.route}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='mt-6 caption uppercase text-menuGray'>About us</div>
            <ul
              className={`${
                isExpanded ? `block` : `hidden`
              } mt-4 text-gray-700 md:flex md:items-center w-full space-y-4`}
            >
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
                    className='block text-gray-800 no-underline md:inline-block md:mt-0 md:ml-6'
                    to={link.route}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul
              className={`${
                isExpanded ? `block` : `hidden`
              } mt-6 text-gray-700 md:flex md:items-center w-full space-y-4`}
            >
              {[
                {
                  route: `/careers`,
                  title: `Careers`,
                },
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    className='block text-gray-800 no-underline md:inline-block md:mt-0 md:ml-6'
                    to={link.route}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
