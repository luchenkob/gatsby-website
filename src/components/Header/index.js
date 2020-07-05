import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import DropDownMenu from './DropDownMenu';

import logoWhite from '../../images/menu/logo-white.png';
import logoPurple from '../../images/menu/logo-purple.png';

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const [selected, setSelected] = useState(null);
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
    <header className='bg-transparent'>
      <div>
        <Helmet>
          <style>{`${isExpanded ?  'body { overflow: hidden; }' : ''}`}</style>
        </Helmet>
      </div>

      <div className='relative flex flex-wrap items-center justify-between max-w-6xl pt-2 pb-4 mx-auto border-b border-white border-opacity-25'>
        <Link to='/'>
          <span className='text-xl font-bold tracking-tight'>
            <img className='h-6 lg:h-8' src={logoWhite} />
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

        <nav className='hidden relative z-30 md:block w-2/6 text-xs lg:text-lg'>
          <ul className='flex w-full justify-between'>
            {Object.keys(links).map((item) => (
              <li className='relative' key={`${item}-desktop`}>
                <button
                  className='capitalize opacity-75 focus:outline-none transition-opacity duration-200 ease-in-out hover:opacity-100'
                  onMouseOver={() => setSelected(item)}
                >
                  {item}
                  {selected === item ? (
                    <svg
                      className='ml-2 inline-block'
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='5'
                      viewBox='0 0 8 5'
                    >
                      <path
                        fill='#FFF'
                        d='M4.002 1.68L1.009 4.864C.927 4.952.817 5 .699 5 .582 5 .472 4.952.39 4.864l-.262-.279C.045 4.498 0 4.381 0 4.255c0-.124.045-.24.128-.328L3.69.136C3.774.048 3.884 0 4.001 0c.118 0 .229.048.311.136l3.56 3.787c.083.088.128.205.128.33 0 .124-.045.241-.128.329l-.262.279c-.17.181-.448.181-.619 0l-2.99-3.18z'
                      />
                    </svg>
                  ) : (
                    <svg
                      className='ml-2 inline-block'
                      xmlns='http://www.w3.org/2000/svg'
                      width='8'
                      height='5'
                      viewBox='0 0 8 5'
                    >
                      <path
                        fill='#FFF'
                        d='M4.002 3.32L1.009.136C.927.048.817 0 .699 0 .582 0 .472.048.39.136L.128.415C.045.502 0 .619 0 .745c0 .124.045.24.128.328L3.69 4.864c.083.088.193.136.31.136.118 0 .229-.048.311-.136l3.56-3.787C7.955.989 8 .872 8 .747c0-.124-.045-.241-.128-.329L7.61.14c-.17-.181-.448-.181-.619 0l-2.99 3.18z'
                      />
                    </svg>
                  )}
                </button>
                {selected === item && (
                  <DropDownMenu
                    setSelected={setSelected}
                    links={links[selected]}
                  />
                )}
              </li>
            ))}
            <li>
              <Link
                className='capitalize opacity-75 focus:outline-none transition-opacity duration-200 ease-in-out hover:opacity-100'
                to='/careers'
              >
                Careers
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isExpanded && (
        <div className='fixed z-20 inset-0 bg-white w-screen h-full px-3 pt-3 md:px-8 text-left'>
          <div className='relative flex flex-wrap items-center justify-between max-w-6xl pt-2 pb-4 mx-auto w-11/12 border-b'>
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
          <nav className='flex flex-col text-xs w-11/12 mx-auto max-w-6xl'>
            <div className='mt-6 caption uppercase text-menuGray'>Products</div>
            <ul
              className={`${
                isExpanded ? `block` : `hidden`
              } mt-4 text-gray-700 md:flex md:items-center w-full space-y-4`}
            >
              {links['products'].map((link) => (
                <li key={`${link.title}-mobile`}>
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
              {links['about us'].map((link) => (
                <li key={`${link.title}-mobile`}>
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
              <Link
                className='block text-gray-800 no-underline md:inline-block md:mt-0 md:ml-6'
                to='/careers'
              >
                Careers
              </Link>
            </ul>
          </nav>
        </div>
      )}

      {/* Overlay */}
      {selected && (
        <div
          className='fixed z-10 inset-0 h-screen'
          onMouseOver={() => setSelected(null)}
        />
      )}
    </header>
  );
};

export default Header;
