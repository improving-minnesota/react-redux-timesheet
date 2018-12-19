import * as TimeunitActionTypes from '../actions/TimeunitActionTypes';

export default (state = { timeunits: [] }, action) => {
  switch (action.type) {
    case TimeunitActionTypes.LIST:
      return Object.assign({}, state, { timeunits: action.timeunits });

    default:
      return state;
  }
};
