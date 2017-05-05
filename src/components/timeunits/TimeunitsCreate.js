import React, { Component } from 'react';
import TimeunitForm from './TimeunitForm';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimeunitActions from '../../actions/TimeunitActionCreator';
import * as TimesheetActions from '../../actions/TimesheetActionCreator';
import { withRouter } from 'react-router';

class TimeunitsCreate extends Component {

  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(timeunit){
    const timesheet = this.props.timesheet;
    this.props.actions.createTimeunit(timesheet._id, timeunit).then(() => {

      //Reload all of the timeunits after the save
      this.props.actions.listTimeunits(timesheet._id);

      //Redirect back to the detail page to see all time entries
      this.props.history.push('/employees/' + timesheet.user_id + '/timesheets/detail/' + timesheet._id);
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Timeunits Create</PageHeader>
        </Row>
        <Row>
          <TimeunitForm timesheetId={this.props.timesheet._id} userId={this.props.timesheet.user_id} timeunit={this.props.timeunit} actions={this.props.actions} handleSave={this.handleSave}/>
        </Row>
      </Grid>
    );
  }
}

TimeunitsCreate.propTypes = {
  timeunit: React.PropTypes.object.isRequired,
  timesheet: React.PropTypes.object.isRequired,
  history: React.PropTypes.object
};

TimeunitsCreate.defaultProps = {
  timeunit: {}
};

function mapStateToProps(state) {
  return {
    timesheet: state.timesheets.timesheet
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TimeunitActions, dispatch)
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeunitsCreate));
