import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

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

  showDetail(employee) {
    if (employee.deleted) {
      console.log('You cannot edit a deleted employee.');
      return;
    }

    this.props.history.push(`/employees/detail/${employee._id}`);
  }

  render() {
    const employee = this.props.employee;

    let rowClass = '';
    if (employee.deleted) {
      rowClass = 'faded';
    }

    const button = (
      <Button
        onClick={e => {
          this.handleClick(employee);
          e.stopPropagation();
        }}
        bsStyle={employee.deleted ? 'success' : 'danger'}
      >
        {employee.deleted ? 'Restore' : 'Delete'}
      </Button>
    );

    return (
      <tr
        className={rowClass}
        onClick={() => {
          this.showDetail(employee);
        }}
      >
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

export default withRouter(EmployeeRow);
