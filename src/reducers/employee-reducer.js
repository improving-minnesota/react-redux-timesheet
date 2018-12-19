import * as EmployeeActionTypes from '../actions/EmployeeActionTypes';

export default (state = { employees: [] }, action) => {
  switch (action.type) {
    case EmployeeActionTypes.LIST:
      return Object.assign({}, state, { employees: action.employees });

    default:
      return state;
  }
};