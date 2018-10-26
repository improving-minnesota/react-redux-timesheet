import React from 'react';
import { shallow } from 'enzyme';

import TimesheetRow from './TimesheetRow';

describe('Timesheet Row Component: ', function() {
  let timesheetRow;

  beforeEach(() => {
    const timesheet = {};
    timesheetRow = shallow(<TimesheetRow timesheet={timesheet} />);
  });

  it('should instantiate the Timesheet Component', function() {
    expect(timesheetRow).toHaveLength(1);
  });
});
