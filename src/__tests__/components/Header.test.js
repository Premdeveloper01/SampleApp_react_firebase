import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe("Testing Header Component", () => {
    it("renders nav bar", () => {
    expect(shallow(<Header />).find("#collapsibleNavbar").length).toEqual(1);
  });
  it("renders button", () => {
    expect(shallow(<Header />).find(".btn-success").length).toEqual(1);
  });
});
