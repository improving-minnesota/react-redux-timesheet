import React from 'react';
import Timesheets from './Timesheets';
import ReactTestUtils from 'react-dom/test-utils';
import configureStore from '../../store/configure-store';


describe('Timesheets Component: ', function () {

  let timesheets;
  const mockStore = configureStore();

  beforeEach(() =>{
    timesheets = ReactTestUtils.renderIntoDocument(<Timesheets store={mockStore}/>);
  });

  it('should instantiate the Timesheet Component', function () {
    expect(ReactTestUtils.isCompositeComponent(timesheets)).toBe(true);
  });

});
