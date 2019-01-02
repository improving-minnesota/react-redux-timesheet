import React from 'react';
import PropTypes from 'prop-types';
import EmployeeTable from './EmployeeTable';
import * as EmployeeActionCreators from '../actions/EmployeeActionCreator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Employees extends React.Component {
  componentDidMount() {
    const { listEmployees } = this.props;
    listEmployees();
  }

  render() {
    const { employees, deleteEmployee, restoreEmployee } = this.props;

    return (
      <div>
        <h1>Employees</h1>
        <Link to="/employees/detail">
          <Button bsStyle="primary">
            New Employee
          </Button>
        </Link>
        <EmployeeTable employees={ employees } onDelete={ deleteEmployee } onRestore={ restoreEmployee }/>
      </div>
    );
  }
}

Employees.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => {
  return {
    employees: state.employees.data,
  };
};

const mapDispatchToProps = {
  listEmployees: EmployeeActionCreators.listEmployees,
  deleteEmployee: EmployeeActionCreators.removeEmployee,
  restoreEmployee: EmployeeActionCreators.restoreEmployee
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
