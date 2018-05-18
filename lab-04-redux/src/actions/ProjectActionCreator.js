import * as ProjectActionTypes from './ProjectActionTypes';
import Axios from 'axios';


const apiUrl = '/api/projects';

const url = (projectId) => {

  let url = apiUrl;
  if (projectId) {
    url += '/' + projectId;
  }

  return url;
}

export const listProjects = () => {
  return (dispatch) => {
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

export const getProject = (id) => {
  return (dispatch) => {
    return Axios.get(url(id))
      .then(res => {
        dispatch(get(res.data));
        return true;
      })
      .catch(error => {
        console.log('There was an error getting the project');
      });
  }
}

export const updateProject = (project) => {
  return (dispatch) => {
    return Axios.put(url(project._id), project)
      .then(res => {
        dispatch(get(res.data));
        console.log('Project : ' + project.name + ', updated.');
        return true;
      })
      .catch(error => {
        console.log('There was an error updating project.');
      });
  }
}

export const removeProject = (project) => {
  return (dispatch) => {
    project.deleted = true;

    return Axios.put(url(project._id), project)
      .then(res => {
        dispatch(get(res.data));
        console.log('Project : ' + res.data.name + ', was deleted.');
        return true;
      })
      .catch(error => {
        console.log('Error attempting to delete project.');
      });
  }
}

export const restoreProject = (project) => {
  return (dispatch) => {
    project.deleted = false;

    return Axios.put(url(project._id), project)
      .then(res => {
        dispatch(get(res.data))
        console.log('Project : ' + res.data.name + ', was restored.');
        return true;
      })
      .catch(error => {
        console.log('Error attempting to restore project.');
      });
  }
}

export const createProject = (project) => {
  return (dispatch) => {
    return Axios.put(url(), project)
      .then(res => {
        dispatch(get(res.data))
        console.log('Project : ' + res.data.name + ', created.');
        return true;
      })
      .catch(error => {
        console.log('There was an error creating project.');
      });
  }
}

export const list = (projects) => {
  return {
    type: ProjectActionTypes.LIST,
    projects: projects
  }
}

export const get = (project) => {
  return {
    type: ProjectActionTypes.GET,
    project: project
  }
}
