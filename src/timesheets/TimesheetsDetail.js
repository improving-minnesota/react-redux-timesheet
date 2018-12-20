import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Grid, PageHeader, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as TimesheetActions from '../actions/TimesheetActionCreator';
import Timeunits from '../timeunits/Timeunits';
import TimesheetForm from './TimesheetForm';
import { Header } from 'semantic-ui-react';

class TimesheetsDetail extends React.Component {

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
      history.push('/employees/timesheets');
    });
  };

  render() {
    const { employees, timesheet } = this.props;

    return (
      <div>
        <Header as="h1">Timesheet Detail</Header>
        <TimesheetForm
          timesheet={ timesheet }
          employees={ employees }
          handleSave={ this.handleSave }
        />
        {//Show timeunits after the getTimesheet() call finishes loading the timesheet
          timesheet && timesheet._id && (
            <Timeunits timesheet={ timesheet } />
          )
        }
      </div>
    );
  }
}

TimesheetsDetail.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object),
  timesheet: PropTypes.object,
  createTimesheet: PropTypes.func,
  updateTimesheet: PropTypes.func,
  getTimesheet: PropTypes.func
};

const mapStateToProps = (state, props) => {
  const { match } = props;
  const { _id } = match.params;

  return {
    employees: state.employees.employees,
    timesheet: state.timesheets.timesheets.find(timesheet => timesheet._id === _id)
  };
};

const mapDispatchToProps = {
  createTimesheet: TimesheetActions.createTimesheet,
  updateTimesheet: TimesheetActions.updateTimesheet,
  getTimesheet: TimesheetActions.getTimesheet
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimesheetsDetail));
