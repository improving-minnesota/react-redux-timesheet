import * as ProjectActionTypes from './ProjectActionTypes';
import Axios from 'axios';

const apiUrl = "http://localhost:3001/api/projects"

export const fetchProjects = () => {
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(list(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function list (projects) {
  return {
    type: ProjectActionTypes.LIST,
    projects: projects
  }
}

export function get(id) {
  return {
    type: ProjectActionTypes.GET,
    project: {_id: id}
  }
}

export function create(project) {
  return {
    type: ProjectActionTypes.CREATE,
    project: project
  }
}

export function update(project) {
  return {
    type: ProjectActionTypes.UPDATE,
    project: project
  }
}

export function remove(project) {
  return {
    type: ProjectActionTypes.DELETE,
    project: project
  }
}

export function restore(project) {
  return {
    type: ProjectActionTypes.RESTORE,
    project: project
  }
}

