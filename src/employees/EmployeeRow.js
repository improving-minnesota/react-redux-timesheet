import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

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
      <tr className={employee.deleted ? 'deleted' : ''}>
        <td>{employee.username}</td>
        <td>{employee.email}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.admin ? 'Yes' : 'No'}</td>
        <td>
          <Button onClick={this.handleClick}>
            {employee.deleted ? 'Restore' : 'Delete'}
          </Button>
        </td>
      </tr>
    );
  }
}

EmployeeRow.propTypes = {
  employee: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired
};

export default EmployeeRow;
