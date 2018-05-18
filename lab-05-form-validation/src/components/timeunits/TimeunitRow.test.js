import React from 'react';
import TimeunitRow from './TimeunitRow';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';

describe('Timeunit Row Component: ', () =>  {

  let timesheetRow;

  beforeEach(() =>{
    const timeunit = {};
    timesheetRow = mount(<MemoryRouter><TimeunitRow timeunit={timeunit} /></MemoryRouter>);
  });

  it('should instantiate the TimeunitRow Component', () =>  {
    expect(timesheetRow).toHaveLength(1);
  });

});
