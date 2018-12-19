import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'semantic-ui-react';
import { withRouter } from 'react-router';

class EmployeeRow extends React.Component {
  handleClick = () => {
    const { employee, onDelete, onRestore } = this.props;

    if (employee.deleted) {
      onRestore(employee);
    } else {
      onDelete(employee);
    }
  };

  showDetail = () => {
    const { history, employee } = this.props;

    if (employee.deleted) {
      console.log('You cannot edit a deleted employee.');
      return;
    }

    history.push(`/employees/detail/${employee._id}`);
  };

  render() {
    const { employee } = this.props;

    return (
      <Table.Row negative={employee.deleted} onClick={this.showDetail}>
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

export default withRouter(EmployeeRow);
