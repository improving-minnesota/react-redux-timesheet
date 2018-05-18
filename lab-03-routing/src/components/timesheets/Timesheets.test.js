import React from 'react';
import { shallow } from 'enzyme';

import Timesheets from './Timesheets';

describe('Timesheets Component: ', () =>  {

  let timesheets;

  beforeEach(() =>{
    timesheets = shallow(<Timesheets/>);
  });

  it('should instantiate the Timesheet Component', () =>  {
    expect(timesheets).toHaveLength(1);
  });

});
