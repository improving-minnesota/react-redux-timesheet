import * as React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as TimeunitActions from '../actions/TimeunitActionCreator';
import TimeunitForm from './TimeunitForm';
import * as ProjectActions from '../actions/ProjectActionCreator';
import { Header } from 'semantic-ui-react';

class TimeunitsDetail extends React.Component {

  componentDidUpdate() {
    const { listProjects } = this.props;
    listProjects();
  }

  handleSave = (timeunit) => {
    const { history, match, createTimeunit, updateTimeunit } = this.props;
    const userId = match.params.user_id;
    const timesheetId = match.params.timesheet_id;

    const result = timeunit._id ? updateTimeunit(timesheetId, timeunit) : createTimeunit(timesheetId, timeunit);
    result.then(() => {
      history.push(`/employees/${userId}/timesheets/${timesheetId}`);
    });
  };

  render() {
    const { projects, timeunit } = this.props;
    const userId = this.props.match.params.user_id;
    const timesheetId = this.props.match.params.timesheet_id;
    return (
      <div>
        <Header as="h1">Timeunit Edit</Header>
        <TimeunitForm
          projects={ projects }
          timesheetId={ timesheetId }
          userId={ userId }
          timeunit={ timeunit }
          handleSave={ this.handleSave }
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { match } = props;
  const { timesheet_id, _id } = match.params;
  const timesheet = state.timesheets.timesheets.find(timesheet => timesheet._id === timesheet_id);
  return {
    timeunit: state.timeunits.timeunits.find(timeunit => timeunit._id === _id),
    projects: state.projects.projects
  };
};

const mapDispatchToProps = {
  updateTimeunit: TimeunitActions.updateTimeunit,
  createTimeunit: TimeunitActions.createTimeunit,
  getTimeunit: TimeunitActions.getTimeunit,
  listProjects: ProjectActions.listProjects
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimeunitsDetail));
