/* global it, expect, jest */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { App } from './App';
import { initialState } from "./reducers";


it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
      todos={[]}
      deleteTodo={mockFunction}
    />
  );
  expect(component.exists()).toEqual(true);
});