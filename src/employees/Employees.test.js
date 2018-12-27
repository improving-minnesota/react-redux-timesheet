import React from 'react';
import Employees from './Employees';
import { shallow } from 'enzyme';
import EmployeeTable from './EmployeeTable';

describe('<Employees />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Employees />);
  });

  it('should instantiate the Employee Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should pass employees down to table', () => {
    wrapper.setState({
      employees: [{}, {}, {}, {}]
    });
    expect(wrapper.find(EmployeeTable).prop('employees')).toHaveLength(4);
  });
});
