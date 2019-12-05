import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe("Testing App Component", () => {
  it("should render without throwing any errors", () => {
    expect(shallow(<App />).find(".row").length).toBe(1);
  });
});
