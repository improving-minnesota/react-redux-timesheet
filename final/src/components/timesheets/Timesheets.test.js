import React from 'react';
import { mount } from 'enzyme';

import Timesheets from './Timesheets';
import configureStore from '../../store/configure-store';
import {MemoryRouter} from 'react-router-dom';

describe('Timesheets Component: ', () =>  {

  let timesheets;
  const mockStore = configureStore();

  beforeEach(() =>{
    timesheets = mount(<MemoryRouter><Timesheets store={mockStore}/></MemoryRouter>);
  });

  it('should instantiate the Timesheet Component', () =>  {
    expect(timesheets).toHaveLength(1);
  });

});
