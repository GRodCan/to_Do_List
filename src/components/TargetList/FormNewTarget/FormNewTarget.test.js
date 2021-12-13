import React from "react";
import { shallow } from "enzyme";
import FormNewTarget from "./FormNewTarget";

describe("FormNewTarget", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormNewTarget />);
    expect(wrapper).toMatchSnapshot();
  });
});
