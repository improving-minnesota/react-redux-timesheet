import React from 'react';
import TimeunitTable from './TimeunitTable';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('Timeunit Table Component: ', () => {
  let timeunitTable;

  beforeEach(() => {
    const timeunits = [{ _id: 1 }, { _id: 2 }];
    timeunitTable = mount(
      <MemoryRouter>
        <TimeunitTable timeunits={timeunits} />
      </MemoryRouter>
    );
  });

  it('should instantiate the Timeunit Component', () => {
    expect(timeunitTable).toHaveLength(1);
  });
});
