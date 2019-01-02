import React from 'react';
import Employees from './Employees';
import { shallow } from 'enzyme';

describe('<Employees />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Employees />);
  });

  it('should instantiate the Employee Component', () => {
    expect(wrapper).toHaveLength(1);
  });
});
