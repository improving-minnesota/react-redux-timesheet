import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

class EmployeeRow extends React.Component {
  render() {
    const { employee } = this.props;

    return (
      <Table.Row>
        <Table.Cell>{employee.username}</Table.Cell>
        <Table.Cell>{employee.email}</Table.Cell>
        <Table.Cell>{employee.firstName}</Table.Cell>
        <Table.Cell>{employee.lastName}</Table.Cell>
        <Table.Cell>{employee.admin ? 'Yes' : 'No'}</Table.Cell>
      </Table.Row>
    );
  }
}

EmployeeRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeRow;
