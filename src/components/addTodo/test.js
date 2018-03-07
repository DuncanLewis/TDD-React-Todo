/* global expect, it, describe */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import AddTodo from '.';

describe('AddTodo component', () => {
  it('should render successfully', () => {
    const component = shallow(<AddTodo/>);
    expect(component.exists()).toEqual(true);
  });
});