import React from 'react';
import EmployeeRow from './EmployeeTable';
import ReactTestUtils from 'react-dom/test-utils';


describe('Employee Row Component: ', function () {

  let employeeRow;

  beforeEach(() =>{
    const employee = {};
    employeeRow = ReactTestUtils.renderIntoDocument(<EmployeeRow employee={employee} />);
  });

  it('should instantiate the Employee Component', function () {
    expect(ReactTestUtils.isCompositeComponent(employeeRow)).toBe(true);
  });

});
