import React from 'react';
import Timesheets from './Timesheets';
import ReactTestUtils from 'react-dom/test-utils';
import configureStore from '../../store/configure-store';
import {MemoryRouter} from 'react-router-dom';

describe('Timesheets Component: ', function () {

  let timesheets;
  const mockStore = configureStore();

  beforeEach(() =>{
    timesheets = ReactTestUtils.renderIntoDocument(<MemoryRouter><Timesheets store={mockStore}/></MemoryRouter>);
  });

  it('should instantiate the Timesheet Component', function () {
    expect(ReactTestUtils.isCompositeComponent(timesheets)).toBe(true);
  });

});
