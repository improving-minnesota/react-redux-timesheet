import React from 'react';
import Employees from './Employees';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';


describe('Employees Component: ', function () {

  it('should instantiate the Employee Component', function () {
      const component = renderer.create(
              <Employees/>
      );

      let stringVal = JSON.stringify(component);
      expect(stringVal).toMatch(/Employees/);

  });

});
