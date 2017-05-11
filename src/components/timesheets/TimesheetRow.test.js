import React from 'react';
import TimesheetRow from './TimesheetRow';
import ReactTestUtils from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom';

describe('Timesheet Row Component: ', function () {

  let timesheetRow;

  beforeEach(() =>{
    const timesheet = {};
    const routerStub = {};
    timesheetRow = ReactTestUtils.renderIntoDocument(<MemoryRouter><TimesheetRow timesheet={timesheet} actions={{}} route={routerStub} /></MemoryRouter>);
  });

  it('should instantiate the TimesheetRow Component', function () {
    expect(ReactTestUtils.isCompositeComponent(timesheetRow)).toBe(true);
  });

});
