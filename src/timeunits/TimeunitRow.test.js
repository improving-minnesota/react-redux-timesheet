import React from 'react';
import TimeunitRow from './TimeunitRow';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

describe('<TimeunitRow />', () => {
  let wrapper;

  beforeEach(() => {
    const timesheet = {};
    const timeunit = {
      project: 'A',
      dateWorked: 'B',
      hoursWorked: 'C'
    };
    wrapper = mount(
      <MemoryRouter>
        <TimeunitRow timesheet={timesheet} timeunit={timeunit} />
      </MemoryRouter>
    ).find(TimeunitRow);
  });

  it('should instantiate the TimeunitRow Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render values into expected cells', () => {
    expect(wrapper.find('td')).toHaveLength(4);
    expect(wrapper.find('td').at(0).text()).toEqual('A');
    expect(wrapper.find('td').at(1).text()).toEqual('B');
    expect(wrapper.find('td').at(2).text()).toEqual('C');
  });
});
