import React from 'react';
import Timeunits from './Timeunits';
import {mount} from 'enzyme';
import configureStore from '../../store/configure-store';
import {MemoryRouter} from 'react-router-dom';

describe('Timeunits Component: ', () =>  {

  let timeunits;
  let timesheet;
  const mockStore = configureStore();

  beforeEach(() =>{
    timesheet = {_id: '123'}
    timeunits = mount(<MemoryRouter><Timeunits store={mockStore} timesheet={timesheet}/></MemoryRouter>);
  });

  it('should instantiate the Timeunit Component', () =>  {
    expect(timeunits).toHaveLength(1);
  });

});
