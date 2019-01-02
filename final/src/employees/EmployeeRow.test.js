import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import EmployeeRow from './EmployeeRow';

describe('<EmployeeRow />', () => {
  let wrapper;

  beforeEach(() => {
    const employee = {
      username: 'fflintstone',
      email: 'fred.flintstone@slatequarry.com',
      firstName: 'Fred',
      lastName: 'Flintstone',
      admin: true
    };

    wrapper = mount(
      <MemoryRouter>
        <EmployeeRow employee={employee} />
      </MemoryRouter>
    );
  });

  it('should render values into expected cells', () => {
    expect(wrapper.find('td')).toHaveLength(6);
    expect(wrapper.find('td').at(0).text()).toEqual('fflintstone');
    expect(wrapper.find('td').at(1).text()).toEqual('fred.flintstone@slatequarry.com');
    expect(wrapper.find('td').at(2).text()).toEqual('Fred');
    expect(wrapper.find('td').at(3).text()).toEqual('Flintstone');
    expect(wrapper.find('td').at(4).text()).toEqual('Yes');
  });
});
