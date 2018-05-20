import React from 'react';
import { mount } from 'enzyme';

import TimesheetTable from './TimesheetTable';
import { MemoryRouter } from 'react-router-dom';

describe('Timesheet Table Component: ', () => {
  let timesheetTable;

  beforeEach(() => {
    const timesheets = [{ _id: 1 }, { _id: 2 }];
    timesheetTable = mount(
      <MemoryRouter>
        <TimesheetTable timesheets={timesheets} actions={{}} />
      </MemoryRouter>
    );
  });

  it('should instantiate the Timesheet Table Component', () => {
    expect(timesheetTable).toHaveLength(1);
  });
});
