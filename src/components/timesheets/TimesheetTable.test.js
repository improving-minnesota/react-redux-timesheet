import React from 'react';
import TimesheetTable from './TimesheetTable';
import ReactTestUtils from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom';

describe('Timesheet Table Component: ', function () {

  let timesheetTable;

  beforeEach(() =>{
    const timesheets = [{}, {}];
    timesheetTable = ReactTestUtils.renderIntoDocument(<MemoryRouter><TimesheetTable timesheets={timesheets} actions={{}} /></MemoryRouter>);
  });

  it('should instantiate the Timesheet Component', function () {
    expect(ReactTestUtils.isCompositeComponent(timesheetTable)).toBe(true);
  });

});
