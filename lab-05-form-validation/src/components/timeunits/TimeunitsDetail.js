import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimeunitActions from '../../actions/TimeunitActionCreator';
import TimeunitForm from './TimeunitForm';
import * as ProjectActions from '../../actions/ProjectActionCreator';

class TimeunitsDetail extends Component {

  constructor(props) {
    super(props);

    const id = props.match.params._id;
    const timesheetId = props.match.params.timesheet_id;
    props.actions.getTimeunit(timesheetId, id);
    props.projectActions.listProjects();

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(timeunit){
    const userId = this.props.match.params.user_id;
    const timesheetId = this.props.match.params.timesheet_id;
    this.props.actions.updateTimeunit(timesheetId, timeunit).then(() => {

      //Reload all of the timeunits after the save
      this.props.actions.listTimeunits(timesheetId);

      this.props.history.push(`/employees/${userId}/timesheets/detail/${timesheetId}`);
    });
  }

  render() {
    const userId = this.props.match.params.user_id;
    const timesheetId = this.props.match.params.timesheet_id;
    return (
      <Grid>
        <Row>
          <PageHeader>Timeunit Edit</PageHeader>
        </Row>
        <Row>
          <TimeunitForm projects={this.props.projects} timesheetId={timesheetId} userId={userId} timeunit={this.props.timeunit} actions={this.props.actions} handleSave={this.handleSave}/>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timeunit: state.timeunits.timeunit,
    projects: state.projects.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(TimeunitActions, dispatch),
    projectActions: bindActionCreators(ProjectActions, dispatch)
  };
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeunitsDetail));
