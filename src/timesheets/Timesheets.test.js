import React from 'react';
import { shallow } from 'enzyme';

import Timesheets from './Timesheets';
import TimesheetTable from './TimesheetTable';

describe('<Timesheets />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Timesheets />);
  });

  it('should instantiate the Timesheet Component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should pass timesheets down to table', () => {
    wrapper.setState({
      timesheets: [{}, {}, {}, {}]
    });
    expect(wrapper.find(TimesheetTable).prop('timesheets')).toHaveLength(4);
  });
});
