import * as EmployeeActionTypes from './EmployeeActionTypes';
import Axios from 'axios';

const apiUrl = '/api/users';

const url = employeeId => {
  if (employeeId) {
    return `${apiUrl}/${employeeId}`;
  }
  return apiUrl;
};

export const listEmployees = () => {
  return dispatch => {
    return Axios.get(url())
      .then(response => {
        dispatch(list(response.data));
        console.log('Employees retrieved.');
      })
      .catch(error => {
        console.log('Error attempting to retrieve employees.', error);
      });
  };
};

export const getEmployee = id => {
  return dispatch => {
    return Axios.get(url(id))
      .then(res => {
        dispatch(get(res.data));
        return true;
      })
      .catch(error => {
        console.log('There was an error getting the employee');
      });
  };
};

export const updateEmployee = employee => {
  return dispatch => {
    return Axios.put(url(employee._id), employee)
      .then(res => {
        dispatch(get(res.data));
        console.log(`Employee : ${employee._id}, updated.`);
        return true;
      })
      .catch(error => {
        console.log('There was an error updating employee.');
      });
  };
};

export const removeEmployee = employee => {
  return dispatch => {
    employee.deleted = true;

    return Axios.put(url(employee._id), employee)
      .then(res => {
        dispatch(get(res.data));
        console.log(`Employee : ${res.data._id}, was deleted.`);
        return true;
      })
      .catch(error => {
        console.log('Error attempting to delete employee.');
      });
  };
};

export const restoreEmployee = employee => {
  return dispatch => {
    employee.deleted = false;

    return Axios.put(url(employee._id), employee)
      .then(res => {
        dispatch(get(res.data));
        console.log(`Employee : ${res.data._id}, was restored.`);
        return true;
      })
      .catch(error => {
        console.log('Error attempting to restore employee.');
      });
  };
};

export const createEmployee = employee => {
  return dispatch => {
    return Axios.post(url(), employee)
      .then(res => {
        dispatch(get(res.data));
        console.log(`Employee : ${res.data._id}, created.`);
        return true;
      })
      .catch(error => {
        console.log('There was an error creating employee.');
      });
  };
};

export const list = employees => {
  return {
    type: EmployeeActionTypes.LIST,
    employees: employees,
  };
};

export const get = employee => {
  return {
    type: EmployeeActionTypes.GET,
    employee: employee,
  };
};
