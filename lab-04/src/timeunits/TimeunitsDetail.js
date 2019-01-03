import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as TimeunitActions from '../actions/TimeunitActionCreator';
import TimeunitForm from './TimeunitForm';
import * as ProjectActions from '../actions/ProjectActionCreator';

class TimeunitsDetail extends React.Component {

  componentDidMount() {
    const { listProjects } = this.props;
    listProjects();
  }

  handleSave = (timeunit) => {
    const { history, match, createTimeunit, updateTimeunit } = this.props;
    const timesheetId = match.params.timesheet_id;

    const result = timeunit._id ? updateTimeunit(timesheetId, timeunit) : createTimeunit(timesheetId, timeunit);
    result.then(() => {
      history.push(`/timesheets/detail/${timesheetId}`);
    });
  };

  render() {
    const { projects, timeunit } = this.props;
    return (
      <div>
        <h1>Timeunit Detail</h1>
        <TimeunitForm
          projects={ projects }
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
