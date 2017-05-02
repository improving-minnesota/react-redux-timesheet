import React from 'react';
import Employees from './Employees';
import renderer from 'react-test-renderer';
import configureStore from '../../store/configure-store';

const mockStore = configureStore();

describe('Employees Component: ', function () {

  it('should instantiate the Employee Component', function () {
    const component = renderer.create(
      <Employees store={mockStore}/>
    );

      const stringVal = JSON.stringify(component);
      expect(stringVal).toMatch(/Employees/);

  });

});
