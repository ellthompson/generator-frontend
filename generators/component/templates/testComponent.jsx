import React from 'react';
import { shallow } from 'enzyme';

import <%= classname %> from '../';

//describe("<%= classname %>", () => {
  //const component = shallow(<<%= classname %> />);
  //describe("when", () => {
    //test("then", () => {
    //});
  //});
//});

//describe("<%= classname %>", () => {
  //const component = shallow(<<%= classname %> />);
  //describe("this happens", () => {
  //});
//});

describe('<%= classname %>', () => {
  test('is rendered', () => {
    const component = shallow(<<%= classname %> />);
    expect(component.find('<%= classname %>')).toHaveLength(1);
  });
});
