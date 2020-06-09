import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Mobile from "./Mobile";

const ResponsiveContainer = ({ children }) => (
  <div>
    <Sidebar>{children}</Sidebar>
    <Mobile>{children}</Mobile>
  </div>
);

export default ResponsiveContainer;

ResponsiveContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
