import * as EmployeeActionTypes from './EmployeeActionTypes';
import Axios from 'axios';

const apiUrl = '/api/users';

const url = employeeId => {
  let url = apiUrl;
  if (employeeId) {
    url += `/${employeeId}`;
  }

  return url;
};

export function list(employees) {
  return {
    type: EmployeeActionTypes.LIST,
    employees: employees
  };
}

export function get(employee) {
  return {
    type: EmployeeActionTypes.GET,
    employee: employee
  };
}

export function listEmployees() {
  return function(dispatch) {
    return Axios.get(url())
      .then(response => {
        dispatch(list(response.data));
        console.log('Employees retrieved.');
      })
      .catch(error => {
        console.log('Error attempting to retrieve employees.', error);
      });
  };
}

export const getEmployee = id => {
  return dispatch => {
    return Axios.get(url(id))
      .then(function(res) {
        dispatch(get(res.data));
        return true;
      })
      .catch(function(x) {
        console.log('There was an error getting the employee');
      });
  };
};

export const updateEmployee = employee => {
  return dispatch => {
    return Axios.put(url(employee._id), employee)
      .then(function(res) {
        dispatch(get(res.data));
        console.log(`Employee : ${employee.name}, updated.`);
        return true;
      })
      .catch(function(x) {
        console.log('There was an error updating employee.');
      });
  };
};

export const removeEmployee = employee => {
  return dispatch => {
    employee.deleted = true;

    return Axios.put(url(employee._id), employee)
      .then(function(res) {
        dispatch(get(res.data));
        console.log(`Employee : ${res.data.name}, was deleted.`);
        return true;
      })
      .catch(function(x) {
        console.log('Error attempting to delete employee.');
      });
  };
};

export const restoreEmployee = employee => {
  return dispatch => {
    employee.deleted = false;

    return Axios.put(url(employee._id), employee)
      .then(function(res) {
        dispatch(get(res.data));
        console.log(`Employee : ${res.data.name}, was restored.`);
        return true;
      })
      .catch(function(x) {
        console.log('Error attempting to restore employee.');
      });
  };
};

export const createEmployee = employee => {
  return dispatch => {
    return Axios.put(url(), employee)
      .then(function(res) {
        dispatch(get(res.data));
        console.log(`Employee : ${res.data.name}, created.`);
        return true;
      })
      .catch(function(x) {
        console.log('There was an error creating employee.');
      });
  };
};
