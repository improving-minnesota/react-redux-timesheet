import React from 'react';
import TimeunitRow from './TimeunitRow';
import ReactTestUtils from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom';

describe('Timeunit Row Component: ', function () {

  let timesheetRow;

  beforeEach(() =>{
    const timeunit = {};
    timesheetRow = ReactTestUtils.renderIntoDocument(<MemoryRouter><TimeunitRow timeunit={timeunit} /></MemoryRouter>);
  });

  it('should instantiate the TimeunitRow Component', function () {
    expect(ReactTestUtils.isCompositeComponent(timesheetRow)).toBe(true);
  });

});
