import React from 'react';
import { shallow } from 'enzyme';

import TimesheetTable from './TimesheetTable';
import TimesheetRow from './TimesheetRow';

describe('<TimesheetTable />', () => {
  let wrapper;

  beforeEach(() => {
    const timesheets = [{ _id: 1 }, { _id: 2 }];
    wrapper = shallow(<TimesheetTable timesheets={timesheets} />);
  });

  it('should instantiate the Timesheet Table Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render a row for each timesheet', () => {
    expect(wrapper.find(TimesheetRow)).toHaveLength(2);
  });
});
