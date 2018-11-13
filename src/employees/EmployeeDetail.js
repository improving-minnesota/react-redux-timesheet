import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Header } from 'semantic-ui-react';
import EmployeeForm from './EmployeeForm';
import * as EmployeeActions from '../actions/EmployeeActionCreator';

class EmployeesDetail extends React.Component {
  componentDidMount() {
    const { match, getEmployee } = this.props;
    const id = match.params._id;
    getEmployee(id);
  }

  handleSave = (values) => {
    const { onCreate, onUpdate, history } = this.props;

    const result = values._id ? onUpdate(values) : onCreate(values);
    result.then(() => {
      history.push('/employees');
    });
  };

  render() {
    return (
      <div>
        <Header as="h1">Employees Detail</Header>
        <EmployeeForm
          project={this.props.employee}
          actions={this.props.actions}
          handleSave={this.handleSave}
        />
      </div>
    );
  }
}

EmployeesDetail.propTypes = {
  employee: PropTypes.object.isRequired,
  history: PropTypes.object
};

EmployeesDetail.defaultProps = {
  employee: {}
};

const mapStateToProps = (state) => {
  return {
    employee: state.employees.employee
  };
};

const mapDispatchToProps = {
  onCreate: EmployeeActions.createEmployee,
  onUpdate: EmployeeActions.updateEmployee,
  getEmployee: EmployeeActions.getEmployee
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeesDetail));
