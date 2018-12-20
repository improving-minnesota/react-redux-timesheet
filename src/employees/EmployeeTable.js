import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import EmployeeRow from './EmployeeRow';

class EmployeeTable extends React.Component {
  render() {
    const { employees } = this.props;
    
    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Admin</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {employees.map(employee => (
            <EmployeeRow employee={ employee } key={ employee._id }/>
          ))}
        </Table.Body>
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
