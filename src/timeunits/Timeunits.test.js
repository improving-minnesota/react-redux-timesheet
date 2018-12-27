import React from 'react';
import Timeunits from './Timeunits';
import { mount } from 'enzyme';
import configureStore from '../store/configure-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('Timeunits Component: ', () => {
  let wrapper;

  beforeEach(() => {
    const mockStore = configureStore();
    const timesheet = { _id: '123' };
    wrapper = mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Timeunits timesheet={timesheet} />
        </MemoryRouter>
      </Provider>
    );
  });

  it('should instantiate the Timeunit Component', () => {
    expect(wrapper).toHaveLength(1);
  });
});
