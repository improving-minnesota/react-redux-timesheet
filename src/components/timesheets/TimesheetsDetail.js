import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {Button} from 'react-bootstrap';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
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

  handleSave(timesheet){
    this.props.actions.updateTimesheet(timesheet).then(() => {
      this.props.history.push(`/employees/all/timesheets`);
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Timesheet Detail</PageHeader>
        </Row>
        <Row>
          <TimesheetForm timesheet={this.props.timesheet} actions={this.props.actions} handleSave={this.handleSave}/>
        </Row>
        <Row>
          <Timeunits timesheet={this.props.timesheet} actions={this.props.actions}/>
        </Row>
      </Grid>
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
