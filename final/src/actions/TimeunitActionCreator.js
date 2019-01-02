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
      .catch(err => {
        console.log('Error attempting to retrieve logged hours.');
      });
  };
};

export const getTimeunit = (timesheetId, timeunitId) => {
  return dispatch => {
    return Axios.get(url(timesheetId, timeunitId))
      .then(response => {
        dispatch(get(response.data));
        return true;
      })
      .catch(err => {
        console.log('There was an error getting the timeunit');
      });
  };
};

export const updateTimeunit = (timesheetId, timeunit) => {
  return dispatch => {
    return Axios.put(url(timesheetId, timeunit._id), timeunit)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Timesheet ${timesheetId} timeunit ${timeunit._id} was updated.`);
        return true;
      })
      .catch(err => {
        console.log('There was an error updating the timeunit.');
      });
  };
};

export const removeTimeunit = (timesheetId, timeunit) => {
  return dispatch => {
    timeunit.deleted = true;

    return Axios.put(url(timesheetId, timeunit._id), timeunit)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Timesheet ${timesheetId} timeunit ${response.data._id} was deleted.`);
        return true;
      })
      .catch(err => {
        console.log('Error attempting to delete timeunit.');
      });
  };
};

export const restoreTimeunit = (timesheetId, timeunit) => {
  return dispatch => {
    timeunit.deleted = false;

    return Axios.put(url(timesheetId, timeunit._id), timeunit)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Timesheet ${timesheetId} timeunit ${response.data._id} was restored.`);
        return true;
      })
      .catch(err => {
        console.log('Error attempting to restore timeunit.');
      });
  };
};

export const createTimeunit = (timesheetId, timeunit) => {
  return dispatch => {
    return Axios.post(url(timesheetId), timeunit)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Timeunit ${response.data._id} created.`);
        return true;
      })
      .catch(err => {
        console.log('There was an error creating timeunit.');
      });
  };
};

export function list(timeunits) {
  return {
    type: TimeunitActionTypes.LIST,
    timeunits: timeunits
  };
}

export function get(timeunit) {
  return {
    type: TimeunitActionTypes.GET,
    timeunit: timeunit
  };
}
