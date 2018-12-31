import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as TimesheetActionCreators from '../actions/TimesheetActionCreator';
import * as EmployeeActionCreators from '../actions/EmployeeActionCreator';
import Timeunits from '../timeunits/Timeunits';
import TimesheetForm from './TimesheetForm';

class TimesheetsDetail extends React.Component {

  componentDidMount() {
    const { listEmployees } = this.props;
    listEmployees();
  }

  handleSave = (timesheet) => {
    const { history, createTimesheet, updateTimesheet } = this.props;

    const save = timesheet._id ? updateTimesheet(timesheet) : createTimesheet(timesheet);
    save.then(() => {
      history.push('/employees/all/timesheets');
    });
  };

  render() {
    const { timesheet } = this.props;

    return (
      <div>
        <h1>Timesheet Detail</h1>
        <TimesheetForm
          timesheet={timesheet}
          handleSave={this.handleSave}
        />
        {//Show timeunits after the getTimesheet() call finishes loading the timesheet
          timesheet && timesheet._id && (
            <Timeunits timesheet={timesheet}/>
          )
        }
      </div>
    );
  }
}

TimesheetsDetail.propTypes = {
  timesheet: PropTypes.object,
  createTimesheet: PropTypes.func,
  updateTimesheet: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    timesheet: state.timesheets.timesheet
  };
};

const mapDispatchToProps = {
  createTimesheet: TimesheetActionCreators.createTimesheet,
  updateTimesheet: TimesheetActionCreators.updateTimesheet,
  listEmployees: EmployeeActionCreators.listEmployees
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimesheetsDetail));
