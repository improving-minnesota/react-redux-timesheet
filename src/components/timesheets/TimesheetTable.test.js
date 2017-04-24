import React from 'react';
import TimesheetTable from './TimesheetTable';
import ReactTestUtils from 'react-dom/test-utils';


describe('Timesheet Table Component: ', function () {

  let timesheetTable;

  beforeEach(() =>{
    const timesheets = [{}, {}];
    timesheetTable = ReactTestUtils.renderIntoDocument(<TimesheetTable timesheets={timesheets} />);
  });

  it('should instantiate the Timesheet Component', function () {
    expect(ReactTestUtils.isCompositeComponent(timesheetTable)).toBe(true);
  });

});
