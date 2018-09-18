import * as AuthActionTypes from '../actions/AuthActionTypes';

export default (state = { user: null }, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_USER:
      return { ...state, user: action.user };
    case AuthActionTypes.ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
