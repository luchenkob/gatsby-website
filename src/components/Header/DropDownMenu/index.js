import React from 'react'
import PropType from 'prop-types'
import {Link} from 'gatsby'

const DropDownMenu = ({setSelected, selected, links}) => {
    return <div className='absolute pt-4'>
    <ul
      className={`w-48 bg-white text-gray-700 pl-5 py-4 shadow-sm space-y-4 transition-opacity duration-200 ease-in-out`}
    >
      {links[selected].map((subLink) => (
        <li
          className='transition-colors duration-100 ease-in-out hover:text-purple'
          key={`${subLink.title}-desktop`}
        >
          <Link
            onClick={() => setSelected(null)}
            to={subLink.route}
          >
            {subLink.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
}

DropDownMenu.propTypes = {
    setSelected: PropType.func.isRequired,
    selected: PropType.string.isRequired,
    links: PropType.array.isRequired
}

export default DropDownMenu;