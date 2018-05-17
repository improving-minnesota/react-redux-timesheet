import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';

describe('Employee Row Component: ', function () {


    it('should instantiate the Employee Row Component', function () {

        const employee = {username:'fflintstone',
                          'email':'fred.flintstone@slatequarry.com',
                          'firstName':'Fred',
                          'lastName':'Flintstone',
                          'admin':true
                         }

        const component = shallow(
                <EmployeeRow employee={employee}/>
        );

        expect(component).toContainReact(<td>Flintstone</td>);
        expect(component).toContainReact(<td>fflintstone</td>);
        expect(component).toContainReact(<td>Yes</td>);

    });

});
