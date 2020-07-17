import React from "react";

import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

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
    "about us": [
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
    <footer className="mt-12 lg:mt-40 py-8 xl:py-16 bg-gray-600 text-gray-300">
      <div className="xl:hidden">
        <MobileFooter links={links} />
      </div>
      <div className="hidden xl:block">
        <DesktopFooter links={links} />
      </div>
      <ul className="mx-auto w-11/12 mt-6 flex justify-start  space-x-4 xl:space-x-6 xl:mt-10 col-span-2 xl:w-1260">
        <li>
          <a
            className="h-10 w-10 rounded-full bg-gray-500 text-white flex items-center justify-center transition-colors hover:bg-white hover:text-gray-500"
            href="https://www.facebook.com/bemeliorism/"
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="18"
              viewBox="0 0 10 18"
            >
              <path d="M9.623.004L7.225 0C4.53 0 2.789 1.739 2.789 4.43v2.042H.377C.17 6.472 0 6.637 0 6.84V9.8c0 .203.169.367.377.367H2.79v7.467c0 .203.169.367.377.367h3.146c.209 0 .378-.164.378-.367v-7.467h2.82c.208 0 .376-.164.376-.367l.002-2.96c0-.097-.04-.19-.11-.26-.071-.068-.168-.107-.268-.107H6.69V4.741c0-.832.203-1.255 1.317-1.255h1.616c.208 0 .377-.165.377-.367V.37c0-.203-.169-.367-.377-.367z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="h-10 w-10 rounded-full bg-gray-500 text-white flex items-center justify-center transition-colors hover:bg-white hover:text-gray-500"
            href="https://www.instagram.com/bemeliorism/"
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
            >
              <g>
                <path d="M17.928 4.997c-.042-.903-.196-1.524-.417-2.062-.229-.571-.58-1.082-1.04-1.507-.448-.432-.992-.767-1.589-.98-.571-.209-1.224-.355-2.178-.395C11.742.01 11.437 0 8.998 0 6.56 0 6.254.01 5.296.05c-.954.04-1.61.186-2.178.395-.604.216-1.144.548-1.593.983-.457.425-.81.94-1.036 1.504C.27 3.473.114 4.09.072 4.994.026 5.904.016 6.192.016 8.5s.01 2.596.052 3.503c.042.903.197 1.524.418 2.062.228.571.582 1.082 1.039 1.507.449.432.993.767 1.589.98.572.209 1.225.355 2.179.395.958.04 1.263.05 3.702.05 2.438 0 2.744-.01 3.702-.05.954-.04 1.61-.186 2.178-.395 1.208-.442 2.162-1.345 2.629-2.487.22-.541.375-1.159.417-2.062.042-.907.053-1.195.053-3.503s-.004-2.596-.046-3.503zm-1.617 6.94c-.04.83-.186 1.278-.31 1.577-.301.74-.922 1.328-1.705 1.613-.315.117-.792.256-1.666.292-.948.04-1.232.05-3.628.05-2.397 0-2.684-.01-3.628-.05-.878-.036-1.351-.175-1.667-.292-.39-.136-.744-.352-1.032-.634-.298-.275-.526-.607-.67-.976-.123-.299-.27-.75-.308-1.577-.043-.897-.053-1.166-.053-3.433 0-2.268.01-2.54.053-3.434.038-.83.185-1.278.308-1.577.144-.368.372-.704.674-.976.291-.282.642-.498 1.032-.634.315-.116.793-.256 1.666-.292.948-.04 1.232-.05 3.628-.05 2.4 0 2.684.01 3.628.05.878.036 1.351.176 1.667.292.39.136.744.352 1.032.634.298.276.526.608.67.976.123.3.27.75.309 1.577.042.897.052 1.166.052 3.434 0 2.267-.01 2.533-.052 3.43z" />
                <path d="M8.998 4.134c-2.547 0-4.614 1.955-4.614 4.366 0 2.41 2.067 4.366 4.614 4.366 2.548 0 4.614-1.955 4.614-4.366 0-2.41-2.066-4.366-4.614-4.366zm0 7.198c-1.652 0-2.993-1.268-2.993-2.832 0-1.564 1.34-2.832 2.993-2.832 1.653 0 2.993 1.268 2.993 2.832 0 1.564-1.34 2.832-2.993 2.832zM14.872 3.961c0 .563-.482 1.02-1.077 1.02s-1.077-.457-1.077-1.02.482-1.02 1.077-1.02 1.077.457 1.077 1.02z" />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a
            className="h-10 w-10 rounded-full bg-gray-500 text-white flex items-center justify-center transition-colors hover:bg-white hover:text-gray-500"
            href="https://www.linkedin.com/company/bemeliorism/"
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M17.995 18H18v-6.602c0-3.23-.695-5.717-4.47-5.717-1.816 0-3.034.995-3.531 1.94h-.053V5.982h-3.58v12.017h3.728v-5.95c0-1.567.297-3.082 2.238-3.082 1.911 0 1.94 1.788 1.94 3.182V18h3.723zM.297 5.983L4.029 5.983 4.029 18 .297 18zM2.162 0C.968 0 0 .968 0 2.162c0 1.193.968 2.181 2.162 2.181 1.193 0 2.161-.988 2.161-2.181C4.323.968 3.354 0 2.161 0z" />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a
            className="h-10 w-10 rounded-full bg-gray-500 text-white flex items-center justify-center transition-colors hover:bg-white hover:text-gray-500"
            href="https://www.twitter.com/bemeliorism/"
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
            >
              <path d="M18 1.657c-.67.281-1.383.468-2.126.558.765-.437 1.349-1.124 1.623-1.952-.713.407-1.5.694-2.34.855C14.48.428 13.515 0 12.462 0c-2.043 0-3.688 1.587-3.688 3.533 0 .28.025.55.085.806-3.067-.143-5.782-1.55-7.606-3.695C.935 1.173.748 1.778.748 2.43c0 1.223.658 2.307 1.64 2.935-.594-.01-1.175-.175-1.668-.435v.039C.72 6.686 2 8.11 3.677 8.439c-.3.08-.628.117-.968.117-.236 0-.475-.013-.699-.06.479 1.399 1.835 2.427 3.449 2.46-1.256.94-2.85 1.507-4.576 1.507-.302 0-.593-.013-.883-.048C1.635 13.424 3.572 14 5.661 14c6.79 0 10.503-5.385 10.503-10.052 0-.156-.006-.307-.014-.457.733-.497 1.348-1.119 1.85-1.834z" />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
