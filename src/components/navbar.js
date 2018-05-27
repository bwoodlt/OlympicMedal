import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import logo from "../assets/logo.png";

const navBar = () => {
  return (
    <Navbar inverse style={style.navBar}>
      <Navbar.Header>
        <Navbar.Brand>
          <a
            href="https://www.drawgroup.com/create/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="Draw Create" width="150" />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem>Olympic Medal Table</NavItem>
        <NavItem>Contact</NavItem>
      </Nav>
    </Navbar>
  );
};

const style = {
  navBar: {
    borderRadius: 0,
    marginBottom: 0
  }
};

export default navBar;
