import React from "react";
import PropTypes from "prop-types";
import { Header, Footer } from "../common";
import "../../styles/main.css";

/**
 * A basic layout showing different
 * components
 * @param {*} param0
 */
const Layout = ({ children, location }) => (
  <div>
    <Header location={location} /> {children} <Footer />
  </div>
);

Layout.propType = {
  children: PropTypes.element.isRequired,
  location: PropTypes.any
};

export default Layout;
