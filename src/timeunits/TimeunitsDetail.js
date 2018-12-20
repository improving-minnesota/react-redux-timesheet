import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as TimeunitActions from '../actions/TimeunitActionCreator';
import TimeunitForm from './TimeunitForm';
import * as ProjectActions from '../actions/ProjectActionCreator';
import { Header } from 'semantic-ui-react';

class TimeunitsDetail extends React.Component {

  componentDidUpdate() {
    const { getTimeunit, listProjects, match } = this.props;
    const id = match.params._id;
    const timesheetId = match.params.timesheet_id;
    getTimeunit(timesheetId, id);
    listProjects();
  }

  handleSave = (timeunit) => {
    const { history, updateTimeunit, createTimeunit, match } = this.props;
    const userId = match.params.user_id;
    const timesheetId = match.params.timesheet_id;

    const result = timeunit._id ? updateTimeunit(timesheetId, timeunit) : createTimeunit(timesheetId, timeunit);
    result.then(() => {
      history.push(`/employees/${userId}/timesheets/detail/${timesheetId}`);
    });
  };

  render() {
    const { projects, timeunit, match } = this.props;
    const userId = match.params.user_id;
    const timesheetId = match.params.timesheet_id;
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

TimeunitsDetail.propTypes = {
  timeunit: PropTypes.object,
  projects: PropTypes.arrayOf(PropTypes.object),
  updateTimeunit: PropTypes.func,
  createTimeunit: PropTypes.func,
  getTimeunit: PropTypes.func,
  listProjects: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    timeunit: state.timeunits.timeunit,
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
