import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";

const ResponsiveContainer = ({ children }) => (
  <div>
    <Sidebar>{children}</Sidebar>
  </div>
);

export default ResponsiveContainer;

ResponsiveContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
