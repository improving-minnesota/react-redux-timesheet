import * as TimeunitActionTypes from '../actions/TimeunitActionTypes';
import * as ProjectActionTypes from '../actions/ProjectActionTypes';

export default (state = {timeunits: [], timeunit: {}}, action) => {
  switch (action.type) {
    case TimeunitActionTypes.LIST:
      return Object.assign({}, state, {timeunits: action.timeunits});
    case TimeunitActionTypes.GET:
      return Object.assign({}, state, {timeunit: action.timeunit});
    case ProjectActionTypes.LIST:
      return Object.assign({}, state, {projects: action.projects});

    default:
      return state;
  }
}
