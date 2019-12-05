import React from 'react';
import { shallow } from 'enzyme';
import Gallery from '../../components/MainSlider';

describe("Testing Gallery Component", () => {
  const props = {
    listImage: [
      {
        id: 1,
        image: 'foo',
      },
    ],
  };
  it("renders image container", () => {
    expect(shallow(<Gallery {...props} />).find(".image-container").length).toEqual(1);
  });
  it("renders gallery component without any errors", () => {
    expect(shallow(<Gallery {...props} />).find(".home-gallery").length).toEqual(1);
  });
});
