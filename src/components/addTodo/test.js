/* global expect, it, describe, jest, beforeEach */

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import AddTodo from '.';

describe('AddTodo component', () => {

  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo submitTodo={submitMock}/>
    )
  });

  it('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });

  describe('Add todo button', () => {
    it('should exist', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('should call the submitTodo function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    })
  });
});