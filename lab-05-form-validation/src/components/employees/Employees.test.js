import React from 'react';
import Employees from './Employees';
import { shallow, mount } from 'enzyme';
import configureStore from '../../store/configure-store';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore();

describe('Employees Component: ', () => {
  it('should instantiate the Employee Component', () => {
    const component = shallow(
      <MemoryRouter>
        <Employees store={mockStore} />
      </MemoryRouter>
    );

    expect(component).toHaveLength(1);
  });
});
