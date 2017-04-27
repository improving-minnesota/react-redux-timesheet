import React from 'react';
import EmployeeTable from './EmployeeTable';
import renderer from 'react-test-renderer';


describe('Employee Table Component: ', function () {


    it('should instantiate the Employee Row', function () {

        
        const employees = [{username:'fflintstone',
                          'email':'fred.flintstone@slatequarry.com',
                          'firstName':'Fred',
                          'lastName':'Flintstone',
                          'admin':true
                         }]



        const component = renderer.create(
                <EmployeeTable employess={employees}/>
        );

        let stringVal = JSON.stringify(component);
        expect(stringVal).toMatch(/table/);
        expect(stringVal).toMatch(/Admin/);


  });

});
