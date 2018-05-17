import React from 'react';
import EmployeeTable from './EmployeeTable';
import { mount } from 'enzyme';
import {MemoryRouter} from 'react-router-dom';

describe('Employee Table Component: ', function () {


    it('should instantiate the Employee Table', function () {


        const employees = [{username:'fflintstone',
                          'email':'fred.flintstone@slatequarry.com',
                          'firstName':'Fred',
                          'lastName':'Flintstone',
                          'admin':true,
                          '_id':1
                         }]



        const component = mount(
                <MemoryRouter><EmployeeTable employees={employees}/></MemoryRouter>
        );

        expect(component).toContainReact(<th>Last Name</th>);
        expect(component).toIncludeText('Flintstone');

        expect(component.find('tbody tr')).toHaveLength(1);

  });

});
