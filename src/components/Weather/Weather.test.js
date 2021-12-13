import React from "react";
import { shallow } from "enzyme";
import Weather from "./Weather";

describe("Wheather", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper).toMatchSnapshot();
  });
});
