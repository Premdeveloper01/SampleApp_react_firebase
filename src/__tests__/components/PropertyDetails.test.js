import React from 'react';
import { shallow } from 'enzyme';
import PropertyDetail from '../../components/PropertyDetails';

describe("Testing PropertyDetail Component", () => {
  const props = {
    match: {
      params: {
        id: 1,
      },
    },
    fetchDetails: jest.fn(),
    details: {
      agreement: true,
      photos: [
        'test',
      ],
      address: {
        crossStreet: 'foo',
        state: 'bar',
      },
      property: {
        stories: 1,
        bathsHalf: 1,
      },
      school: {
        highSchool: 1,
      },
      agent: {
        firstName: 'foo',
      },
      geo: {
        marketArea: 'a',
      },
      association: {
        fee: 500,
      },
    },
  };

  it("renders image container", () => {
    expect(shallow(<PropertyDetail {...props} />).find(".img-fluid").length).toEqual(1);
  });
  it("renders Property remarks", () => {
    expect(shallow(<PropertyDetail {...props} />).find(".side_text").length).toEqual(1);
  });
});
