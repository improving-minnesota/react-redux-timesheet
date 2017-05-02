import React from 'react';
import Employees from './Employees';
import renderer from 'react-test-renderer';


describe('Employees Component: ', function () {

  it('should instantiate the Employee Component', function () {
      const component = renderer.create(
              <Employees/>
      );

      const stringVal = JSON.stringify(component);
      expect(stringVal).toMatch(/Employees/);

  });

  it('should contain a correct employee', function () {
    const component = renderer.create(
        <Employees/>
    );

    const stringVal = JSON.stringify(component);
    expect(stringVal).toMatch(/admin@mixtape.com/);
  });

});
