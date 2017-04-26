import * as ProjectActionTypes from './ProjectActionTypes';

module.exports = {

  list: function (query) {
    return {
      actionType: ProjectActionTypes.LIST,
      query: query
    }
  },

  get: function (id) {
    return {
      actionType: ProjectActionTypes.GET,
      project: {_id: id}
    }
  },

  create: function (project) {
    return {
      actionType: ProjectActionTypes.CREATE,
      project: project
    }
  },

  update: function (project) {
    return {
      actionType: ProjectActionTypes.UPDATE,
      project: project
    }
  },

  remove: function (project) {
    return {
      actionType: ProjectActionTypes.DELETE,
      project: project
    }
  },

  restore: function (project) {
    return {
      actionType: ProjectActionTypes.RESTORE,
      project: project
    }
  }
};
