import * as TimesheetActionTypes from '../actions/TimesheetActionTypes';

export default (state = {timesheets: [], timesheet: {}}, action) => {
  switch (action.type) {
    case TimesheetActionTypes.LIST:
      return Object.assign({}, state, {timesheets: action.timesheets});
    case TimesheetActionTypes.GET:
      return Object.assign({}, state, {timesheet: action.timesheet});

    default:
      return state;
  }
}