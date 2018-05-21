import * as TimeunitActionTypes from './TimeunitActionTypes';
import Axios from 'axios';

const apiUrl = '/api/users/all/timesheets/';

const url = (timesheetId, timeunitId) => {
  let url = apiUrl + timesheetId + '/timeunits';
  if (timeunitId) {
    url += '/' + timeunitId;
  }

  return url;
};

export const listTimeunits = timesheetId => {
  return dispatch => {
    return Axios.get(url(timesheetId))
      .then(response => {
        dispatch(list(response.data));
        console.log('Timeunits retrieved.');
      })
      .catch(error => {
        console.log('Error attempting to retrieve logged hours.');
      });
  };
};

export const getTimeunit = (timesheetId, timeunitId) => {
  return dispatch => {
    return Axios.get(url(timesheetId, timeunitId))
      .then(res => {
        dispatch(get(res.data));
        return true;
      })
      .catch(error => {
        console.log('There was an error getting the timeunit');
      });
  };
};

export const updateTimeunit = (timesheetId, timeunit) => {
  return dispatch => {
    return Axios.put(url(timesheetId, timeunit._id), timeunit)
      .then(res => {
        dispatch(get(res.data));
        console.log(`Timesheet timeunit was updated.`);
        return true;
      })
      .catch(error => {
        console.log('There was an error updating the timeunit.');
      });
  };
};

export const removeTimeunit = (timesheetId, timeunit) => {
  return dispatch => {
    timeunit.deleted = true;

    return Axios.put(url(timesheetId, timeunit._id), timeunit)
      .then(res => {
        dispatch(get(res.data));
        console.log(`Timesheet : ${res.data.name}, logged time was deleted.`);
        return true;
      })
      .catch(error => {
        console.log('Error attempting to delete timeunit.');
      });
  };
};

export const restoreTimeunit = (timesheetId, timeunit) => {
  return dispatch => {
    timeunit.deleted = false;

    return Axios.put(url(timesheetId, timeunit._id), timeunit)
      .then(res => {
        dispatch(get(res.data));
        console.log(`Timesheet : ${res.data.name}, timeunit was restored.`);
        return true;
      })
      .catch(error => {
        console.log('Error attempting to restore timeunit.');
      });
  };
};

export const createTimeunit = (timesheetId, timeunit) => {
  return dispatch => {
    return Axios.post(url(timesheetId), timeunit)
      .then(res => {
        dispatch(get(res.data));
        console.log('Timeunit created.');
        return true;
      })
      .catch(error => {
        console.log('There was an error creating timeunit.');
      });
  };
};

export const list = timeunits => {
  return {
    type: TimeunitActionTypes.LIST,
    timeunits: timeunits
  };
};

export const get = timeunit => {
  return {
    type: TimeunitActionTypes.GET,
    timeunit: timeunit
  };
};
