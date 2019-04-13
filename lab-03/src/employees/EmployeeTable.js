import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import EmployeeRow from './EmployeeRow';

class EmployeeTable extends React.Component {
  render() {
    const {employees} = this.props;
    return (
      <Table bordered striped>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(person => (
            <EmployeeRow employee={person} key={person._id}/>
            ))}
          
        </tbody>
      </Table>

    )
  }
}

EmployeeTable.defaultProps = {
  employees: []
}
EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired
}
export default EmployeeTable;
