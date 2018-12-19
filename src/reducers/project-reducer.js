import * as ProjectActionTypes from '../actions/ProjectActionTypes';

export default (state = { projects: [] }, action) => {
  switch (action.type) {
    case ProjectActionTypes.LIST:
      return Object.assign({}, state, { projects: action.projects });

    default:
      return state;
  }
};
