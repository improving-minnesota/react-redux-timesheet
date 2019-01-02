import * as TimesheetActionTypes from './TimesheetActionTypes';
import Axios from 'axios';

const apiUrl = '/api/users/all/timesheets';

const url = timesheetId => {
  let url = apiUrl;
  if (timesheetId) {
    url += `/${timesheetId}`;
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
      .then(response => {
        dispatch(get(response.data));
        return true;
      })
      .catch(err => {
        console.log('There was an error getting the timesheet');
      });
  };
};

export const updateTimesheet = timesheet => {
  return dispatch => {
    return Axios.put(url(timesheet._id), timesheet)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Timesheet : ${timesheet._id}, updated.`);
        return true;
      })
      .catch(err => {
        console.log('There was an error updating timesheet.');
      });
  };
};

export const removeTimesheet = timesheet => {
  return dispatch => {
    timesheet.deleted = true;

    return Axios.put(url(timesheet._id), timesheet)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Timesheet : ${response.data._id}, was deleted.`);
        return true;
      })
      .catch(err => {
        console.log('Error attempting to delete timesheet.');
      });
  };
};

export const restoreTimesheet = timesheet => {
  return dispatch => {
    timesheet.deleted = false;

    return Axios.put(url(timesheet._id), timesheet)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Timesheet : ${response.data._id}, was restored.`);
        return true;
      })
      .catch(err => {
        console.log('Error attempting to restore timesheet.');
      });
  };
};

export const createTimesheet = timesheet => {
  return dispatch => {
    return Axios.post(url(), timesheet)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Timesheet : ${response.data._id}, created.`);
        return true;
      })
      .catch(err => {
        console.log('There was an error creating timesheet.');
      });
  };
};

export function list(timesheets) {
  return {
    type: TimesheetActionTypes.LIST,
    timesheets: timesheets
  };
}

export function get(timesheet) {
  return {
    type: TimesheetActionTypes.GET,
    timesheet: timesheet
  };
}
