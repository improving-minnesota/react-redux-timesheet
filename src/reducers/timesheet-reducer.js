import * as TimesheetActionTypes from '../actions/TimesheetActionTypes';

export default (state = { timesheets: [] }, action) => {
  switch (action.type) {
    case TimesheetActionTypes.LIST:
      return Object.assign({}, state, { timesheets: action.timesheets });

    default:
      return state;
  }
};
