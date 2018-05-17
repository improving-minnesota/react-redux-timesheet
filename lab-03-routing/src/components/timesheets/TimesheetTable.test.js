import React from 'react';
import { shallow } from 'enzyme';

import TimesheetTable from './TimesheetTable';

describe('Timesheet Table Component: ', function () {

  let timesheetTable;

  beforeEach(() =>{
    const timesheets = [{_id: 1}, {_id: 2}];
    timesheetTable = shallow(<TimesheetTable timesheets={timesheets} />);
  });

  it('should instantiate the Timesheet Table Component', function () {
    expect(timesheetTable).toHaveLength(1);
  });

});
