import React, { Component } from 'react';

class EmployeeRow extends Component {

  render() {
    const employee = this.props.employee;

    return (
      <tr>
        <td>{employee.username}</td>
        <td>{employee.email}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.admin ? 'Yes' : 'No'}</td>
      </tr>
    );
  }

}

EmployeeRow.propTypes = {
  employee: React.PropTypes.object.isRequired
};

export default EmployeeRow;
