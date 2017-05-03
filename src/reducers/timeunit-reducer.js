import * as TimeUnitActionTypes from '../actions/TimeUnitActionTypes';

export default (state = {timeunits: [], timeunit: {}}, action) => {
  switch (action.type) {
    case TimeUnitActionTypes.LIST:
      return Object.assign({}, state, {timeunits: action.timeunits});
    case TimeUnitActionTypes.GET:
      return Object.assign({}, state, {timeunit: action.timeunit});

    default:
      return state;
  }
}
