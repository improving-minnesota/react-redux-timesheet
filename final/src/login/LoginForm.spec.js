import React from 'react';
import LoginForm from './LoginForm';
import { shallow } from 'enzyme';
import { Formik } from 'formik';

describe('<LoginForm />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LoginForm/>
    );
  });

  describe('validation', () => {
    test('should report required values that are missing', () => {
      expect(wrapper.instance().validate({})).toEqual({
        username: 'Required',
        password: 'Required'
      });
    });

    test('should report no errors when valid', () => {
      expect(wrapper.instance().validate({ username: 'a', password: 'b' })).toEqual({});
    });
  });

  describe('submission', () => {
    test('should call onLogin prop', () => {
      const onLogin = jest.fn();
      wrapper.setProps({
        onLogin
      });
      wrapper.find(Formik).simulate('submit', { username: 'a', password: 'b' });
      expect(onLogin).toHaveBeenCalledTimes(1);
    });
  });
});