import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const DropDownMenu = ({ setSelected, links }) => {
  return (
    <div className="absolute pt-4">
      <ul className="w-40 xl:w-48 bg-white text-gray-700 pl-4 xl:pl-5 py-4 shadow-sm xl:space-y-3 xl:space-y-4 transition-opacity duration-200 ease-in-out">
        {links.map((subLink) => (
          <li
            className="transition-colors duration-100 ease-in-out hover:text-purple"
            key={`${subLink.title}-desktop`}
          >
            <Link
              className="font-normal leading-28px"
              onClick={() => setSelected(null)}
              to={subLink.route}
            >
              {subLink.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

DropDownMenu.propTypes = {
  setSelected: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired,
};

export default DropDownMenu;
