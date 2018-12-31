import React from 'react';
import Timeunits from './Timeunits';
import { mount } from 'enzyme';
import configureStore from '../store/configure-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('<Timeunits />', () => {
  let wrapper;

  beforeEach(() => {
    const mockStore = configureStore();
    wrapper = mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Timeunits timeunits={[{}]} />
        </MemoryRouter>
      </Provider>
    );
  });

  it('should instantiate the Timeunit Component', () => {
    expect(wrapper).toHaveLength(1);
  });
});
