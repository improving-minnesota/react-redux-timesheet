import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TimesheetForm from './TimesheetForm';
import { PageHeader, Grid, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimesheetActions from '../../actions/TimesheetActionCreator';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';
import { withRouter } from 'react-router';

class TimesheetsCreate extends Component {
  constructor(props) {
    super(props);
    this.props.employeeActions.listEmployees();
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(timesheet) {
    this.props.actions.createTimesheet(timesheet).then(() => {
      this.props.history.push('/employees/all/timesheets');
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Timesheet Create</PageHeader>
        </Row>
        <Row>
          <TimesheetForm employees={this.props.employees} handleSave={this.handleSave} />
        </Row>
      </Grid>
    );
  }
}

TimesheetsCreate.propTypes = {
  employees: PropTypes.array
};

TimesheetsCreate.defaultProps = {
  employees: []
};

const mapStateToProps = state => {
  return {
    employees: state.employees.employees
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(TimesheetActions, dispatch),
    employeeActions: bindActionCreators(EmployeeActions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimesheetsCreate));
