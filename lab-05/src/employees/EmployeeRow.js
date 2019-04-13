import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

class EmployeeRow extends React.Component {
  handleClick = (event) => {
    const { employee, onDelete, onRestore } = this.props;
    if (employee.deleted) {
      onRestore(employee);
    } else {
      onDelete(employee);
    }
    event.stopPropagation();
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
      <tr className={employee.deleted ? 'deleted' : ''} onClick={this.showDetail}>
        <td>{employee.username}</td>
        <td>{employee.email}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.admin ? 'Yes' : 'No'}</td>
        <td>
          <Button onClick={this.handleClick} bsStyle={employee.deleted ? 'success' : 'danger'}>
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

export default withRouter(EmployeeRow);
