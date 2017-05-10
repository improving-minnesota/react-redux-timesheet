import React from 'react';
import TimeunitTable from './TimeunitTable';
import ReactTestUtils from 'react-dom/test-utils';
import {MemoryRouter} from 'react-router-dom';

describe('Timeunit Table Component: ', function () {

  let timeunitTable;

  beforeEach(() =>{
    const timeunits = [{}, {}];
    timeunitTable = ReactTestUtils.renderIntoDocument(<MemoryRouter><TimeunitTable timeunits={timeunits} /></MemoryRouter>);
  });

  it('should instantiate the Timeunit Component', function () {
    expect(ReactTestUtils.isCompositeComponent(timeunitTable)).toBe(true);
  });

});
