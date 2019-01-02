import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import EmployeeDetail from './EmployeeDetail';
import configureStore from '../store/configure-store';

describe('<EmployeeDetail />', () => {
  it('should instantiate the Employee Detail Component', () => {
    const mockStore = configureStore();
    const component = mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <EmployeeDetail />
        </MemoryRouter>
      </Provider>
    );

    expect(component).toIncludeText('Employee Detail');
  });
});
