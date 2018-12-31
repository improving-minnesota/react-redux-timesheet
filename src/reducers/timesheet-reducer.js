import * as TimesheetActionTypes from '../actions/TimesheetActionTypes';

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case TimesheetActionTypes.LIST:
      return { ...state, data: action.timesheets };
    case TimesheetActionTypes.GET:
      const updatedItem = action.timesheet;
      const index = state.data.findIndex(d => d._id === updatedItem._id);
      if (index >= 0 ) {
        const copy = [...state.data];
        copy.splice(index, 1, updatedItem);
        return { ...state, data: copy };
      }
      return { ...state, data: [...state.data, updatedItem] };
    default:
      return state;
  }
};
