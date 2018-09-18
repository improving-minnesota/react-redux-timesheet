import Axios from 'axios';
import * as AuthActionTypes from "./AuthActionTypes";

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
      .then(function(res) {
        dispatch(setUser(res.data));
        console.log('Login successful');
        return true;
      })
      .catch(function(x) {
        console.log('There was an error logging in.');
        dispatch(error('Failed to login'));
      });
  };
};

export const logout = () => {
  return dispatch => {
    return Axios.post('/api/logout')
      .then(function(res) {
        dispatch(setUser(null));
        console.log('Logout successful');
        return true;
      })
      .catch(function(x) {
        console.log('There was an error logging out.');
      });
  };
};
