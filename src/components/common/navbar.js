import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "../../styles/navbar.css";

const logo = "https://preview.ibb.co/duBvMd/logo.png";

const Header = ({ location }) => {
  return (
    <div>
      <Navbar collapseOnSelect style={style.navBar}>
        <Navbar.Header>
          <Navbar.Brand className="navMain">
            <a href="/" rel="noopener noreferrer">
              <img src={logo} alt="Sainsburys" width={150} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight style={style.navbar_right}>
            <NavItem
              componentClass={Link}
              href="/"
              to="/"
              active={location.pathname === "/"}
            >
              Home
            </NavItem>
            <NavItem
              componentClass={Link}
              href="/search"
              to="/search"
              active={location.pathname === "/search"}
            >
              Search
            </NavItem>
            <NavItem
              componentClass={Link}
              href="/contact"
              to="/contact"
              active={location.pathname === "/contact"}
            >
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const style = {
  navBar: {
    borderRadius: 0,
    height: 100,
    margin: 0
  },
  navbar_right: {
    paddingTop: 20
  }
};

Header.propType = {
  location: PropTypes.any
};
export default Header;
