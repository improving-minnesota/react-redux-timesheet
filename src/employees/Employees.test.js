import React from 'react';
import Employees from './Employees';
import { shallow, mount } from 'enzyme';

describe('<Employees />', () => {
  it('should instantiate the Employee Component', () => {
    const component = shallow(<Employees />);

    expect(component).toHaveLength(1);
  });

  it('should contain a correct employee', () => {
    const component = mount(<Employees />);

    expect(component).toIncludeText('admin@mixtape.com');
  });
});
