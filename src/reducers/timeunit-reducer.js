import * as TimeunitActionTypes from '../actions/TimeunitActionTypes';

export default (state = {timeunits: [], timeunit: {}}, action) => {
  switch (action.type) {
    case TimeunitActionTypes.LIST:
      return Object.assign({}, state, {timeunits: action.timeunits});
    case TimeunitActionTypes.GET:
      return Object.assign({}, state, {timeunit: action.timeunit});

    default:
      return state;
  }
}
