import React from 'react';
import Employees from './Employees';
import renderer from 'react-test-renderer';
import configureStore from '../../store/configure-store';
import {MemoryRouter} from 'react-router-dom';

const mockStore = configureStore();

describe('Employees Component: ', function () {

  it('should instantiate the Employee Component', function () {
    const component = renderer.create(
      <MemoryRouter><Employees store={mockStore}/></MemoryRouter>
    );

      const stringVal = JSON.stringify(component);
      expect(stringVal).toMatch(/Employees/);

  });

});
