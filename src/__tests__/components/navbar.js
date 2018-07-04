import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/common";
import { Navbar, Nav, NavItem } from "react-bootstrap";

describe("Nav Component", () => {
  const data = {
    location: {
      pathname: {
        value: "foo"
      }
    }
  };
  console.log(<Header {...data.location} />);
  it("renders Navbar without crashing app", () => {
    const wrapper = shallow(<Header {...data} />);
    expect(wrapper.find(Nav).length).toBe(1);
  });

  it("renders Navbar.Header without crashing", () => {
    const wrapper = shallow(<Header {...data} />);
    expect(wrapper.find(Navbar.Header).length).toBe(1);
  });

  it("renders Navbar.Brand logo", () => {
    const wrapper = shallow(<Header {...data} />);
    expect(wrapper.find(Navbar.Brand).find("a").length).toBe(1);
    expect(
      wrapper
        .find(Navbar.Brand)
        .find("a")
        .find("img").length
    ).toBe(1);
    expect(
      wrapper
        .find(Navbar.Brand)
        .find("a")
        .find({ href: "/" }).length
    ).toBe(1);
  });

  it("renders two Nav Items", () => {
    const wrapper = shallow(<Header {...data} />);
    expect(
      wrapper
        .find(Navbar)
        .find(Nav)
        .find(NavItem).length
    ).toBe(3);
  });
});
