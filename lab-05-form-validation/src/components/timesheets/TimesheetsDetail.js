import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimesheetActions from '../../actions/TimesheetActionCreator';
import Timeunits from '../timeunits/Timeunits';
import TimesheetForm from './TimesheetForm';

class TimesheetsDetail extends Component {

  constructor(props) {
    super(props);

    const id = props.match.params._id;
    const userId = props.match.params.user_id;

    props.actions.getTimesheet(id, userId);

    this.handleSave = this.handleSave.bind(this);
  }

  // TODO - implement me
  handleSave(timesheet) {

  }

  // TODO - implement me, too
  render() {
    return (
      <div/>
    );
  }
}

function mapStateToProps(state) {
  return {
    timesheet: state.timesheets.timesheet
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TimesheetActions, dispatch)
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TimesheetsDetail));
