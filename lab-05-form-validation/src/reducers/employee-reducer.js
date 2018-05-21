import * as EmployeeActionTypes from '../actions/EmployeeActionTypes';

export default (state = { employees: [], employee: {} }, action) => {
  switch (action.type) {
    case EmployeeActionTypes.LIST:
      return Object.assign({}, state, { employees: action.employees });
    case EmployeeActionTypes.GET:
      return Object.assign({}, state, { employee: action.employee });

    default:
      return state;
  }
};
