import * as ProjectActionTypes from '../actions/ProjectActionTypes';

export default (state = {projects: []}, action) => {
  switch (action.type) {
    case ProjectActionTypes.LIST:
      return Object.assign({}, state, {projects: action.projects});
    case ProjectActionTypes.GET:
    case ProjectActionTypes.CREATE:
    case ProjectActionTypes.UPDATE:
    case ProjectActionTypes.DELETE:
    case ProjectActionTypes.RESTORE:
      const project = action.project;
      const projects = [...state.projects];
      const projectIndex = projects.findIndex(
        (candidate) => {
          return candidate._id === project._id
        }
      );
      if(projectIndex > -1) {
        projects[projectIndex] = project;
      }
      else{
        projects.push(project);
      }
      return Object.assign({}, state, {projects: projects});

    default:
      return state;
  }
}