import * as ProjectActionTypes from '../actions/ProjectActionTypes';

export default (state = {projects: []}, action) => {
  switch (action.type) {
    case ProjectActionTypes.LIST:
      return Object.assign({}, state, {projects: action.projects});
    case ProjectActionTypes.GET:
      return Object.assign({}, state, {project: action.project});

    default:
      return state;
  }
}