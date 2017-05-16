import React from 'react';
import { shallow } from 'enzyme';

import TimesheetTable from './TimesheetTable';

describe('Timesheet Table Component: ', function () {

  let timesheetTable;

  beforeEach(() =>{
    const timesheets = [{}, {}];
    timesheetTable = shallow(<TimesheetTable timesheets={timesheets} />);
  });

  it('should instantiate the Timesheet Table Component', function () {
    expect(timesheetTable).toHaveLength(1);
  });

});
