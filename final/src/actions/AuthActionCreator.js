import * as AuthActionTypes from './AuthActionTypes';
import Axios from 'axios';

export function setUser(user) {
  return {
    type: AuthActionTypes.SET_USER,
    user: user
  };
}

export function error(error) {
  return {
    type: AuthActionTypes.ERROR,
    error: error
  }
}

export const login = (credentials) => {
  return dispatch => {
    return Axios.post('/api/login', credentials)
      .then(response => {
        dispatch(setUser(response.data));
        console.log('Login successful');
        return true;
      })
      .catch(err => {
        console.log('There was an error logging in.');
        dispatch(error('Failed to login'));
      });
  };
};

export const logout = () => {
  return dispatch => {
    return Axios.post('/api/logout')
      .then(response => {
        dispatch(setUser(null));
        console.log('Logout successful');
        return true;
      })
      .catch(err => {
        console.log('There was an error logging out.');
      });
  };
};