import React from 'react';
import PropTypes from 'prop-types';
import TimesheetTable from './TimesheetTable';
import { Link } from 'react-router-dom';
import * as TimesheetActionCreators from '../actions/TimesheetActionCreator';
import connect from 'react-redux/es/connect/connect';
import { Button } from 'react-bootstrap';

class Timesheets extends React.Component {
  componentDidMount() {
    const { listTimesheets } = this.props;
    listTimesheets();
  }

  render() {
    const { deleteTimesheet, restoreTimesheet, timesheets } = this.props;

    return (
      <div>
        <h1>Timesheets</h1>
        <Link to="/timesheets/detail">
          <Button floated="right" primary>
            New Timesheet
          </Button>
        </Link>
        <TimesheetTable timesheets={ timesheets } onDelete={ deleteTimesheet } onRestore={ restoreTimesheet } />
      </div>
    );
  }
}

Timesheets.propTypes = {
  timesheets: PropTypes.arrayOf(PropTypes.object),
  listTimesheets: PropTypes.func,
  deleteTimesheet: PropTypes.func,
  restoreTimesheet: PropTypes.func
};

const mapStateToProps = state => {
  return {
    timesheets: state.timesheets.timesheets,
  };
};

const mapDispatchToProps = {
  listTimesheets: TimesheetActionCreators.listTimesheets,
  deleteTimesheet: TimesheetActionCreators.removeTimesheet,
  restoreTimesheet: TimesheetActionCreators.restoreTimesheet
};

export default connect(mapStateToProps, mapDispatchToProps)(Timesheets);
