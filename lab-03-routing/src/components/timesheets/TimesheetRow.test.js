import React from 'react';
import { shallow } from 'enzyme';

import TimesheetRow from './TimesheetRow';

describe('Timesheet Row Component: ', () =>  {

  let timesheetRow;

  beforeEach(() =>{
    const timesheet = {};
    timesheetRow = shallow(<TimesheetRow timesheet={timesheet} />);
  });

  it('should instantiate the Timesheet Component', () =>  {
    expect(timesheetRow).toHaveLength(1);
  });

});
