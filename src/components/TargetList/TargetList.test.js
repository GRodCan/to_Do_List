import React from "react";
import { shallow } from "enzyme";
import TargetList from "./TargetList";

describe("TargetList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TargetList />);
    expect(wrapper).toMatchSnapshot();
  });
});
