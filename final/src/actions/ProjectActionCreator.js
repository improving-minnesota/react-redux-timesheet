import * as ProjectActionTypes from './ProjectActionTypes';
import Axios from 'axios';

const apiUrl = '/api/projects';

const url = projectId => {
  let url = apiUrl;
  if (projectId) {
    url += `/${projectId}`;
  }

  return url;
};

export function listProjects() {
  return dispatch => {
    return Axios.get(url())
      .then(response => {
        dispatch(list(response.data));
        console.log('Projects retrieved.');
      })
      .catch(error => {
        console.log('Error attempting to retrieve projects.', error);
      });
  };
}

export const getProject = id => {
  return dispatch => {
    return Axios.get(url(id))
      .then(response => {
        dispatch(get(response.data));
        return true;
      })
      .catch(err => {
        console.log('There was an error getting the project');
      });
  };
};

export const updateProject = project => {
  return dispatch => {
    return Axios.put(url(project._id), project)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Project : ${project._id}, updated.`);
        return true;
      })
      .catch(err => {
        console.log('There was an error updating project.');
      });
  };
};

export const removeProject = project => {
  return dispatch => {
    project.deleted = true;

    return Axios.put(url(project._id), project)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Project : ${response.data._id}, was deleted.`);
        return true;
      })
      .catch(err => {
        console.log('Error attempting to delete project.');
      });
  };
};

export const restoreProject = project => {
  return dispatch => {
    project.deleted = false;

    return Axios.put(url(project._id), project)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Project : ${response.data._id}, was restored.`);
        return true;
      })
      .catch(err => {
        console.log('Error attempting to restore project.');
      });
  };
};

export const createProject = project => {
  return dispatch => {
    return Axios.post(url(), project)
      .then(response => {
        dispatch(get(response.data));
        console.log(`Project : ${response.data._id}, created.`);
        return true;
      })
      .catch(err => {
        console.log('There was an error creating project.');
      });
  };
};

export function list(projects) {
  return {
    type: ProjectActionTypes.LIST,
    projects: projects
  };
}

export function get(project) {
  return {
    type: ProjectActionTypes.GET,
    project: project
  };
}
