import React from 'react';
import Employees from './Employees';
import { shallow, mount } from 'enzyme';

describe('Employees Component: ', function() {
  it('should instantiate the Employee Component', function() {
    const component = shallow(<Employees />);

    expect(component).toHaveLength(1);
  });

  it('should contain a correct employee', function() {
    const component = mount(<Employees />);

    expect(component).toIncludeText('admin@mixtape.com');
  });
});
