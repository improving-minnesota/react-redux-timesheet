import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmployeeRow from './EmployeeRow';
import { Table } from 'react-bootstrap';

class EmployeeTable extends Component {
  render() {
    const actions = this.props.actions;

    let employeeRows = this.props.employees.map(employee => {
      return (
        <EmployeeRow employee={employee} key={employee._id} actions={actions} />
      );
    });

    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{employeeRows}</tbody>
      </Table>
    );
  }
}

EmployeeTable.defaultProps = {
  employees: []
};

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired
};

export default EmployeeTable;
