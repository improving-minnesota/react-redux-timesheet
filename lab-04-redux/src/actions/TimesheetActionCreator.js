import * as TimesheetActionTypes from './TimesheetActionTypes';
import Axios from 'axios';

const apiUrl = '/api/users/all/timesheets';

const url = timesheetId => {
  let url = apiUrl;
  if (timesheetId) {
    url += '/' + timesheetId;
  }

  return url;
};

export const listTimesheets = () => {
  return dispatch => {
    return Axios.get(url())
      .then(response => {
        dispatch(list(response.data));
        console.log('Timesheets retrieved.');
      })
      .catch(error => {
        console.log('Error attempting to retrieve timesheets.');
      });
  };
};

export const getTimesheet = id => {
  return dispatch => {
    return Axios.get(url(id))
      .then(res => {
        dispatch(get(res.data));
        return true;
      })
      .catch(error => {
        console.log('There was an error getting the timesheet');
      });
  };
};

export const updateTimesheet = timesheet => {
  return dispatch => {
    return Axios.put(url(timesheet._id), timesheet)
      .then(res => {
        dispatch(get(res.data));
        console.log('Timesheet : ' + timesheet.name + ', updated.');
        return true;
      })
      .catch(error => {
        console.log('There was an error updating timesheet.');
      });
  };
};

export const removeTimesheet = timesheet => {
  return dispatch => {
    timesheet.deleted = true;

    return Axios.put(url(timesheet._id), timesheet)
      .then(res => {
        dispatch(get(res.data));
        console.log('Timesheet : ' + res.data.name + ', was deleted.');
        return true;
      })
      .catch(error => {
        console.log('Error attempting to delete timesheet.');
      });
  };
};

export const restoreTimesheet = timesheet => {
  return dispatch => {
    timesheet.deleted = false;

    return Axios.put(url(timesheet._id), timesheet)
      .then(res => {
        dispatch(get(res.data));
        console.log('Timesheet : ' + res.data.name + ', was restored.');
        return true;
      })
      .catch(error => {
        console.log('Error attempting to restore timesheet.');
      });
  };
};

export const createTimesheet = timesheet => {
  return dispatch => {
    return Axios.put(url(), timesheet)
      .then(res => {
        dispatch(get(res.data));
        console.log('Timesheet : ' + res.data.name + ', created.');
        return true;
      })
      .catch(error => {
        console.log('There was an error creating timesheet.');
      });
  };
};

export const list = timesheets => {
  return {
    type: TimesheetActionTypes.LIST,
    timesheets: timesheets
  };
};

export const get = timesheet => {
  return {
    type: TimesheetActionTypes.GET,
    timesheet: timesheet
  };
};
