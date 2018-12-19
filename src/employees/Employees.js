import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react';
import EmployeeTable from './EmployeeTable';
import * as EmployeeActionCreators from '../actions/EmployeeActionCreator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Employees extends Component {
  componentDidMount() {
    const { listEmployees } = this.props;
    listEmployees();
  }

  render() {
    const { employees, deleteEmployee, restoreEmployee } = this.props;

    return (
      <div>
        <Header as="h1">
          Employees
          <Link to="/employees/detail">
            <Button floated="right" primary>
              New Employee
            </Button>
          </Link>
        </Header>
        <EmployeeTable employees={ employees } onDelete={ deleteEmployee } onRestore={ restoreEmployee }/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees.employees,
  };
};

const mapDispatchToProps = {
  listEmployees: EmployeeActionCreators.listEmployees,
  deleteEmployee: EmployeeActionCreators.removeEmployee,
  restoreEmployee: EmployeeActionCreators.restoreEmployee
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
