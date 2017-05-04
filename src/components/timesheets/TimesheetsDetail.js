import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {Button} from 'react-bootstrap';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timeunits from '../timeunits/Timeunits'
import * as TimesheetActions from '../../actions/TimesheetActionCreator';

class TimesheetsDetail extends Component {

  constructor(props) {
    super(props);

    const id = props.match.params._id;
    props.actions.getTimesheet(id);

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(timesheet){
    this.props.actions.updateTimesheet(timesheet).then(() => {
      this.props.history.push('/timesheets');
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Timesheet Detail</PageHeader>
        </Row>
        <Row>
          {/*TODO: timesheetForm goes here*/}
        </Row>
        <Row>
          {/*<Timeunits timesheet={this.props.timesheet} actions={this.props.actions}/>*/}
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
