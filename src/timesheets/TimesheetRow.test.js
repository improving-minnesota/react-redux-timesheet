import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import TimesheetRow from './TimesheetRow';

describe('<TimesheetRow />', () => {
  let wrapper;

  beforeEach(() => {
    const timesheet = {
      beginDate: 'A',
      endDate: 'B',
      name: 'C',
      description: 'D'
    };
    wrapper = mount(
      <MemoryRouter>
        <TimesheetRow timesheet={timesheet} />
      </MemoryRouter>
    );
  });

  it('should instantiate the Timesheet Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render values into expected cells', () => {
    expect(wrapper.find('td')).toHaveLength(5);
    expect(wrapper.find('td').at(0).text()).toEqual('A');
    expect(wrapper.find('td').at(1).text()).toEqual('B');
    expect(wrapper.find('td').at(2).text()).toEqual('C');
    expect(wrapper.find('td').at(3).text()).toEqual('D');
  });
});
