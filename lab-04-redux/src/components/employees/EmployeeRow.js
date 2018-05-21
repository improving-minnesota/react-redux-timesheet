import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

class EmployeeRow extends Component {
  handleClick(employee) {
    if (employee.deleted) {
      employee.deleted = false;
      this.props.actions.restoreEmployee(employee).then(this.props.actions.listEmployees);
    } else {
      employee.deleted = true;
      this.props.actions.removeEmployee(employee).then(this.props.actions.listEmployees);
    }
  }

  render() {
    const employee = this.props.employee;

    let rowClass = '';
    if (employee.deleted) {
      rowClass = 'faded';
    }

    const button = (
      <Button
        onClick={() => {
          this.handleClick(employee);
        }}
        bsStyle={employee.deleted ? 'success' : 'danger'}
      >
        {employee.deleted ? 'Restore' : 'Delete'}
      </Button>
    );

    return (
      <tr className={rowClass}>
        <td>{employee.username}</td>
        <td>{employee.email}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.admin ? 'Yes' : 'No'}</td>
        <td>{button}</td>
      </tr>
    );
  }
}

EmployeeRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeRow;
