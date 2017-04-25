import React from 'react';
import Employees from './Employees';
import ReactTestUtils from 'react-dom/test-utils';


describe('Employees Component: ', function () {

  let employees;

  beforeEach(() =>{
    employees = ReactTestUtils.renderIntoDocument(<Employees/>);
  });

  it('should instantiate the Employee Component', function () {
    expect(ReactTestUtils.isCompositeComponent(employees)).toBe(true);
  });

});
