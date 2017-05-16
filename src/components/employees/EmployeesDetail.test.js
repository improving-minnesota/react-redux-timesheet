import React from 'react';
import EmployeesDetail from './EmployeesDetail';
import {mount} from 'enzyme';
import configureStore from '../../store/configure-store';
import {MemoryRouter} from 'react-router-dom';


describe('Employees Detail Component: ', function () {
  let mockStore;
  let actions;

  beforeEach(function() {
    mockStore = configureStore();
    actions = {
      updateEmployee: ()=> {}
    };
  });

  it('should instantiate the Employees Detail Component', function () {
    const component = renderer.create(
      <MemoryRouter><EmployeesDetail store={mockStore}/></MemoryRouter>
    );

      const stringVal = JSON.stringify(component);
      expect(stringVal).toMatch(/Employees Detail/);

  });

  describe.skip('getting the employee', function () {
    describe('and the employee exists on the store state', function () {
      beforeEach(function () {
        mockStore.state.employees.employee = {_id: 'abc123'};
      });

      it('should set the employee on the component state', function () {
        const component = mount(
          <MemoryRouter><EmployeesDetail store={mockStore}/></MemoryRouter>
        );

        expect(component.state.employee._id).to.equal('abc123');
      });
    });

    describe.skip('and the employee does NOT exist in the stored state', function () {
      beforeEach(function () {
        element.get();
      });

      it('should fire a get employee action', function () {
        expect(proxies['../../actions/employee.actions'].get).to.have.been.calledWith('abc123');
      });
    });
  });

});
