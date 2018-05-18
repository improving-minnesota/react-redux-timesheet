import React from 'react';
import EmployeesDetail from './EmployeesDetail';
import {mount} from 'enzyme';
import configureStore from '../../store/configure-store';
import {MemoryRouter} from 'react-router-dom';


describe('Employees Detail Component: ', () =>  {
  let mockStore;

  beforeEach(function() {
    mockStore = configureStore();
  });

  it('should instantiate the Employees Detail Component', () =>  {
    const component = mount(
      <MemoryRouter><EmployeesDetail store={mockStore}/></MemoryRouter>
    );

    expect(component).toIncludeText('Employees Detail');

  });

});
