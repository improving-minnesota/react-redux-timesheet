import React from 'react';
import { shallow } from 'enzyme';

import Timesheets from './Timesheets';
import configureStore from '../../store/configure-store';

describe('Timesheets Component: ', function() {
  let timesheets;
  const mockStore = configureStore();

  beforeEach(() => {
    timesheets = shallow(<Timesheets store={mockStore} />);
  });

  it('should instantiate the Timesheet Component', function() {
    expect(timesheets).toHaveLength(1);
  });
});
