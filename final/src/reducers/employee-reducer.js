import * as EmployeeActionTypes from '../actions/EmployeeActionTypes';

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case EmployeeActionTypes.LIST:
      return { ...state, data: action.employees };
    case EmployeeActionTypes.GET:
      const updatedItem = action.employee;
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