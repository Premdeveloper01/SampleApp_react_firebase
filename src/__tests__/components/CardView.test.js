import React from 'react';
import { shallow } from 'enzyme';
import CardView from '../../components/CardView';

describe("Testing CardView Component", () => {
  const defaultProps = {
    propertyData: [{
      mlsId: 1,
      photos: [
        'test',
      ],
      address: {
        crossStreet: 'foo',
        state: 'bar',
      },
    }]
  };
  it("should render without throwing any errors", () => {
    expect(shallow(<CardView {...defaultProps} />).find(".card-body").length).toEqual(1);
  });

  it("renders image", () => {
    expect(shallow(<CardView {...defaultProps} />).find(".card-img-top").length).toEqual(1);
  });
  it("renders an address", () => {
    expect(shallow(<CardView {...defaultProps} />).find(".card-text").length).toEqual(1);
  });
});
