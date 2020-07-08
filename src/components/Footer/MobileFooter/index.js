import React from "react";
import PropType from "prop-types";
import { Link } from "gatsby";

const MobileFooter = ({ links }) => (
  <nav className="mx-auto w-11/12 grid grid-cols-2 gap-12 md:w-4/5 max-w-6xl">
    <div className="flex flex-col space-y-4">
      <div>
        <div className="caption uppercase text-gray-400">Products</div>
        <ul className="mt-2 flex flex-col space-y-2">
          {links["products"].map((link) => (
            <li key={link.title}>
              <Link
                className="block text-gray-800 no-underline"
                to={link.route}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" col-span-2">
        <Link className="block text-gray-800 no-underline" to={"/careers"}>
          Careers
        </Link>
      </div>

      <Link className="block text-gray-800 no-underline" to={"/terms_of_use"}>
        Terms of Use
      </Link>
    </div>

    <div className="flex flex-col justify-between">
      <div>
        <div className="caption uppercase text-gray-400">About us</div>
        <ul className="mt-2 flex flex-col space-y-2">
          {links["about us"].map((link) => (
            <li key={link.title}>
              <Link
                className="block text-gray-800 no-underline"
                to={link.route}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex flex-col space-y-2">
        {[
          {
            route: `/privacy_policy`,
            title: `Privacy Policy`,
          },
          {
            route: `/gdpr_policy`,
            title: `GDPR Policy`,
          },
        ].map((link) => (
          <li key={link.title}>
            <Link className="block text-gray-800 no-underline" to={link.route}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

MobileFooter.propTypes = {
  links: PropType.object.isRequired,
};

export default MobileFooter;
