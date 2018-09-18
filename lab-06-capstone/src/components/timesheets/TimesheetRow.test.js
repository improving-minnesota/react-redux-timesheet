import React from 'react';
import { mount } from 'enzyme';

import TimesheetRow from './TimesheetRow';
import { MemoryRouter } from 'react-router-dom';

describe('Timesheet Row Component: ', function() {
  let timesheetRow;

  beforeEach(() => {
    const timesheet = {};
    const routerStub = {};
    timesheetRow = mount(
      <MemoryRouter>
        <TimesheetRow timesheet={timesheet} actions={{}} route={routerStub} />
      </MemoryRouter>
    );
  });

  it('should instantiate the Timesheet Component', function() {
    expect(timesheetRow).toHaveLength(1);
  });
});
