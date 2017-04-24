import React from 'react';
import Timesheets from './Timesheets';
import ReactTestUtils from 'react-dom/test-utils';


describe('Timesheets Component: ', function () {

  let timesheets;

  beforeEach(() =>{
    timesheets = ReactTestUtils.renderIntoDocument(<Timesheets/>);
  });

  it('should instantiate the Timesheet Component', function () {
    expect(ReactTestUtils.isCompositeComponent(timesheets)).toBe(true);
  });

});
