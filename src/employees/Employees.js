import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react';
import EmployeeTable from './EmployeeTable';
import * as EmployeeActionCreators from '../actions/EmployeeActionCreator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Employees extends Component {
  constructor(props) {
    super(props);

    props.listEmployees();
  }

  render() {
    const { employees, deleteEmployee, restoreEmployee } = this.props;

    return (
      <div>
        <Header as="h1">
          Employees
          <Button floated="right" primary inverted>
            <Link to="/employees/details">New Employee</Link>
          </Button>
        </Header>
        <EmployeeTable employees={ employees } onDelete={deleteEmployee} onRestore={restoreEmployee} />
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
