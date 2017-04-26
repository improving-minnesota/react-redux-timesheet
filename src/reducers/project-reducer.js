import * as ProjectActionTypes from '../actions/ProjectActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ProjectActionTypes.LIST:
    case ProjectActionTypes.GET:
    case ProjectActionTypes.CREATE:
    case ProjectActionTypes.UPDATE:
    case ProjectActionTypes.DELETE:
    case ProjectActionTypes.RESTORE:
      return [...state, Object.assign({}, action.project)];

    default:
      return state;
  }
}