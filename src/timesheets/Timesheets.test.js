import React from 'react';
import { shallow } from 'enzyme';

import Timesheets from './Timesheets';

describe('<Timesheets />', function() {
  let timesheets;

  beforeEach(() => {
    timesheets = shallow(<Timesheets />);
  });

  it('should instantiate the Timesheet Component', function() {
    expect(timesheets).toHaveLength(1);
  });
});
