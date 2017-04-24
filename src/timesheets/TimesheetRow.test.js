import React from 'react';
import TimesheetRow from './TimesheetTable';
import ReactTestUtils from 'react-dom/test-utils';


describe('Timesheet Row Component: ', function () {

  let timesheetRow;

  beforeEach(() =>{
    const timesheet = {};
    timesheetRow = ReactTestUtils.renderIntoDocument(<TimesheetRow timesheet={timesheet} />);
  });

  it('should instantiate the Timesheet Component', function () {
    expect(ReactTestUtils.isCompositeComponent(timesheetRow)).toBe(true);
  });

});
