import React from 'react';
import EmployeeRow from './EmployeeRow';
import { mount } from 'enzyme';
import {MemoryRouter} from 'react-router-dom';

describe('Employee Row Component: ', function () {


    it('should instantiate the Employee Row Component', function () {

        const employee = {username:'fflintstone',
                          'email':'fred.flintstone@slatequarry.com',
                          'firstName':'Fred',
                          'lastName':'Flintstone',
                          'admin':true
                         }

        const component = mount(
          <MemoryRouter><EmployeeRow employee={employee}/></MemoryRouter>
        );

        expect(component).toContainReact(<td>Flintstone</td>);
        expect(component).toContainReact(<td>fflintstone</td>);
        expect(component).toContainReact(<td>Yes</td>);

    });

});
