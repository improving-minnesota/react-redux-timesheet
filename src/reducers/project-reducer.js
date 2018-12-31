import * as ProjectActionTypes from '../actions/ProjectActionTypes';
import * as TimesheetActionTypes from '../actions/TimesheetActionTypes';

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case ProjectActionTypes.LIST:
      return { ...state, data: action.projects };
    case TimesheetActionTypes.GET:
      const updatedItem = action.project;
      const index = state.data.findIndex(d => d._id === updatedItem._id);
      if (index >= 0 ) {
        return { ...state, data: [...state.data].splice(index, 1, updatedItem) };
      }
      return { ...state, data: [...state.data, updatedItem] };
    default:
      return state;
  }
};
