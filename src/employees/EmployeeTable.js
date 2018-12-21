import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import EmployeeRow from './EmployeeRow';

class EmployeeTable extends React.Component {
  render() {
    const { employees, onDelete, onRestore } = this.props;

    return (
      <Table bordered striped hover>
        <thead>
          <tr>
            <td>Username</td>
            <td>Email</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Admin</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <EmployeeRow employee={ employee } key={ employee._id } onDelete={onDelete} onRestore={onRestore} />
          ))}
        </tbody>
      </Table>
    );
  }
}

EmployeeTable.defaultProps = {
  employees: []
};

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired
};

export default EmployeeTable;
