import * as React from 'react';
import PropTypes from 'prop-types';
import * as EmployeeActionCreators from '../actions/EmployeeActionCreator';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class EmployeeDetail extends React.Component {
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
        <h1>Employee Detail</h1>
        <EmployeeForm
          employee={this.props.employee}
          actions={this.props.actions}
          handleSave={this.handleSave}
        />
      </div>
    );
  }
}

EmployeeDetail.propTypes = {
  employee: PropTypes.object.isRequired,
  history: PropTypes.object
};

EmployeeDetail.defaultProps = {
  employee: {}
};

const mapStateToProps = (state, props) => {
  const { match } = props;
  const { _id } = match.params;
  return {
    employee: state.employees.data.find(employee => employee._id === _id)
  };
};

const mapDispatchToProps = {
  onCreate: EmployeeActionCreators.createEmployee,
  onUpdate: EmployeeActionCreators.updateEmployee
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EmployeeDetail)
);
