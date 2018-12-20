import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import TimesheetTable from './TimesheetTable';
import { Link } from 'react-router-dom';
import * as TimesheetActionCreators from '../actions/TimesheetActionCreator';
import connect from 'react-redux/es/connect/connect';

class Timesheets extends React.Component {
  componentDidMount() {
    const { listTimesheets } = this.props;
    listTimesheets();
  }

  render() {
    const { deleteTimesheet, restoreTimesheet, timesheets } = this.props;

    return (
      <div>
        <Header as="h1">
          Timesheets
          <Link to="/timesheets/detail">
            <Button floated="right" primary>
              New Timesheet
            </Button>
          </Link>
        </Header>
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
