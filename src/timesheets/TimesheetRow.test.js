import React from 'react';
import { shallow } from 'enzyme';

import TimesheetRow from './TimesheetRow';

describe('<TimesheetRow />', () => {
  let timesheetRow;

  beforeEach(() => {
    const timesheet = {};
    timesheetRow = shallow(<TimesheetRow timesheet={timesheet} />);
  });

  it('should instantiate the Timesheet Component', () => {
    expect(timesheetRow).toHaveLength(1);
  });
});
