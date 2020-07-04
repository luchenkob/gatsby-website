import PropTypes from "prop-types";
import React from "react";

import Footer from '../Footer'

function Layout({ children }) {
  return (
    <div className="antialiased flex flex-col min-h-screen font-sans text-gray-700 overflow-hidden">
      <div className="flex-1 w-full">
        {children}
      </div>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
