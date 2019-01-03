import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import Timesheets from './Timesheets';
import configureStore from '../store/configure-store';

describe('<Timesheets />', () => {
  let wrapper;

  beforeEach(() => {
    const mockStore = configureStore();
    wrapper = mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Timesheets timesheets={[{}, {}, {}, {}]}/>
        </MemoryRouter>
      </Provider>
    );
  });

  it('should instantiate the Timesheet Component', () => {
    expect(wrapper).toHaveLength(1);
  });
});
