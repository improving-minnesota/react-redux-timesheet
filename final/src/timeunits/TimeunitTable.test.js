import React from 'react';
import TimeunitTable from './TimeunitTable';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import TimeunitRow from './TimeunitRow';

describe('Timeunit Table Component: ', () => {
  let wrapper;

  beforeEach(() => {
    const timeunits = [{ _id: 1 }, { _id: 2 }];
    wrapper = mount(
      <MemoryRouter>
        <TimeunitTable timeunits={timeunits} />
      </MemoryRouter>
    );
  });

  it('should instantiate the Timeunit Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render a row for each timesheet', () => {
    expect(wrapper.find(TimeunitRow)).toHaveLength(2);
  });
});
