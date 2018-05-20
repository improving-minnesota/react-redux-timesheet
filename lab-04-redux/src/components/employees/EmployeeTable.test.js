import React from 'react';
import EmployeeTable from './EmployeeTable';
import { mount } from 'enzyme';

describe('Employee Table Component: ', () => {
  it('should instantiate the Employee Table', () => {
    const employees = [
      {
        username: 'fflintstone',
        email: 'fred.flintstone@slatequarry.com',
        firstName: 'Fred',
        lastName: 'Flintstone',
        admin: true,
        _id: 1
      }
    ];

    const component = mount(<EmployeeTable employees={employees} />);

    expect(component).toContainReact(<th>Last Name</th>);
    expect(component).toIncludeText('Flintstone');

    expect(component.find('tbody tr')).toHaveLength(1);
  });
});
