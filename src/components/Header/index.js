import { Link } from 'gatsby';
import React, { useState } from 'react';

import logo from '../../images/prancheta-1-2-x-8@3x.png';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className='bg-transparent'>
      <div className='relative flex flex-wrap items-center justify-between max-w-4xl pt-2 pb-4 mx-auto border-b'>
        <Link to='/'>
          <span className='text-xl font-bold tracking-tight'>
            <img className='h-6' src={logo} />
          </span>
        </Link>

        <button
          className='flex items-center text-white md:hidden'
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

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } absolute top-0 left-0 z-20 bg-white text-gray-400 md:flex md:items-center w-full `}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className='block mt-4 text-gray-800 no-underline md:inline-block md:mt-0 md:ml-6'
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
