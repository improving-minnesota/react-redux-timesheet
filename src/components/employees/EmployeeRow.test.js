import React from 'react';
import EmployeeRow from './EmployeeRow';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

describe('Employee Row Component: ', function () {


    it('should instantiate the Employee Row Component', function () {

        const employee = {username:'fflintstone',
                          'email':'fred.flintstone@slatequarry.com',
                          'firstName':'Fred',
                          'lastName':'Flintstone',
                          'admin':true
                         }

        const component = renderer.create(
                <MemoryRouter><EmployeeRow employee={employee}/></MemoryRouter>
        );

        let stringVal = JSON.stringify(component);
        expect(stringVal).toMatch(/td/);
        expect(stringVal).toMatch(/Flintstone/);
        expect(stringVal).toMatch(/fflintstone/);
        expect(stringVal).toMatch(/Yes/);


    });

});
