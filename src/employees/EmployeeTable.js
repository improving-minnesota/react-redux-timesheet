import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import EmployeeRow from './EmployeeRow';

class EmployeeTable extends React.Component {
  render() {
    const employeeRows = this.props.employees.map(employee => (
      <EmployeeRow employee={ employee } key={ employee._id }/>
    ));

    return (
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.Cell>Username</Table.Cell>
            <Table.Cell>Email</Table.Cell>
            <Table.Cell>First Name</Table.Cell>
            <Table.Cell>Last Name</Table.Cell>
            <Table.Cell>Admin</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { employeeRows }
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
