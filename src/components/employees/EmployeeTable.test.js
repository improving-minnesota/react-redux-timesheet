import React from 'react';
import EmployeeTable from './EmployeeTable';
import ReactTestUtils from 'react-dom/test-utils';


describe('Employee Table Component: ', function () {

  let employeeTable;

  beforeEach(() =>{
    const employees = [{}, {}];
    employeeTable = ReactTestUtils.renderIntoDocument(<EmployeeTable employees={employees} />);
  });

  it('should instantiate the Employee Component', function () {
    expect(ReactTestUtils.isCompositeComponent(employeeTable)).toBe(true);
  });

});
