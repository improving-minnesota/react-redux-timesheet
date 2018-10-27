import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'semantic-ui-react';

class EmployeeRow extends React.Component {
  handleClick = () => {
    const { employee, onDelete, onRestore } = this.props;

    if (employee.deleted) {
      onRestore(employee);
    } else {
      onDelete(employee);
    }
  };

  render() {
    const { employee } = this.props;

    return (
      <Table.Row disabled={employee.deleted}>
        <Table.Cell>{employee.username}</Table.Cell>
        <Table.Cell>{employee.email}</Table.Cell>
        <Table.Cell>{employee.firstName}</Table.Cell>
        <Table.Cell>{employee.lastName}</Table.Cell>
        <Table.Cell>{employee.admin ? 'Yes' : 'No'}</Table.Cell>
        <Table.Cell>
          <Button onClick={this.handleClick}>
            {employee.deleted ? 'Restore' : 'Delete'}
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

EmployeeRow.propTypes = {
  employee: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired
};

export default EmployeeRow;
