import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as TimesheetActions from '../actions/TimesheetActionCreator';
import Timeunits from '../timeunits/Timeunits';
import TimesheetForm from './TimesheetForm';
import { Header } from 'semantic-ui-react';

class TimesheetsDetail extends Component {

  componentDidMount() {
    const { getTimesheet, match } = this.props;
    const id = match.params._id;
    const userId = match.params.user_id;

    getTimesheet(id, userId);
  }

  handleSave = (timesheet) => {
    const { history, createTimesheet, updateTimesheet } = this.props;

    const save = timesheet._id ? updateTimesheet(timesheet) : createTimesheet(timesheet);
    save.then(() => {
      history.push('/employees/all/timesheets');
    });
  };

  render() {
    const { createTimesheet, updateTimesheet } = this.props;

    return (
      <div>
        <Header as="h1">Timesheet Detail</Header>
        <TimesheetForm
          timesheet={ this.props.timesheet }
          handleSave={ this.handleSave }
        />
        {//Show timeunits after the getTimesheet() call finishes loading the timesheet
          this.props.timesheet && this.props.timesheet._id && (
            <Timeunits timesheet={ this.props.timesheet } />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timesheet: state.timesheets.timesheet
  };
};

const mapDispatchToProps = {
  createTimesheet: TimesheetActions.createTimesheet,
  updateTimesheet: TimesheetActions.updateTimesheet,
  getTimesheet: TimesheetActions.getTimesheet
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimesheetsDetail));
