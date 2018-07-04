import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import { FormGroup, FormControl, Form } from "react-bootstrap";
import { StoreView } from "../../components";
import { generateData } from "../../utils";

describe("Store View Component", () => {
  const fakeData = sinon.stub().returns(generateData);
  const defaultProps = {
    storeTitle: "Sainsburys Store Locator",
    placeholder: "Enter postcode to find Store",
    listingData: fakeData()
  };
  it("renders form correctly", () => {
    const wrapper = shallow(<StoreView {...defaultProps} />);
    expect(wrapper.find(Form).length).toBe(1);
    expect(wrapper.find(FormGroup).length).toBe(1);
    expect(wrapper.find(FormGroup).find(FormControl).length).toBe(1);
  });
});
