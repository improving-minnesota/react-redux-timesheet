import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import EmployeeRow from './EmployeeRow';

class EmployeeTable extends React.Component {
  propTypes = {
    employees: PropTypes.array.isRequired,
  }
  render() {
    const { employees } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <td>
              First Name
            </td>
            <td>
              Last Name
            </td>
            <td>
              Email Address
            </td>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 &&
            employees.map(employee => <EmployeeRow employee={employee} key={employee._id} />)}
        </tbody>
      </Table>
    );
  }
}

export default EmployeeTable;
