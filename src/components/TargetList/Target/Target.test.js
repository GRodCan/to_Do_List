import React from "react";
import { shallow } from "enzyme";
import Target from "./Target";

describe("Target", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Target />);
    expect(wrapper).toMatchSnapshot();
  });
});
