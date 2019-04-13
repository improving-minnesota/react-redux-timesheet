import React from 'react';
import PropTypes from 'prop-types';

class EmployeeRow extends React.Component {
  propTypes = {
    employee: PropTypes.object.isRequired,
  }
  render() {
    const {employee} = this.props;
    return (
      <tr>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.email}</td>
      </tr>
    );
  }
}

export default EmployeeRow;
