import * as TimesheetActionTypes from '../actions/TimesheetActionTypes';
import * as EmployeeActionTypes from '../actions/EmployeeActionTypes';

export default (state = { timesheets: [], timesheet: {} }, action) => {
  switch (action.type) {
    case TimesheetActionTypes.LIST:
      return Object.assign({}, state, { timesheets: action.timesheets });
    case TimesheetActionTypes.GET:
      return Object.assign({}, state, { timesheet: action.timesheet });
    case EmployeeActionTypes.LIST:
      return Object.assign({}, state, { employees: action.employees });
    default:
      return state;
  }
};
