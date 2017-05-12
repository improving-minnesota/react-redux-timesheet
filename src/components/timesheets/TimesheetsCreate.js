import React, { Component } from 'react';
import TimesheetForm from './TimesheetForm';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimesheetActions from '../../actions/TimesheetActionCreator';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';
import { withRouter } from 'react-router';

class TimesheetsCreate extends Component {

  // TODO - implement me

  render() {
    return (
      <div/>
    );
  }
}

TimesheetsCreate.propTypes = {
  employees: React.PropTypes.array
};

TimesheetsCreate.defaultProps = {
  employees: []
};

function mapStateToProps(state) {
  return {
      employees: state.employees.employees
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TimesheetActions, dispatch),
    employeeActions: bindActionCreators(EmployeeActions, dispatch)
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TimesheetsCreate));
