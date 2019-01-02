import * as ProjectActionTypes from '../actions/ProjectActionTypes';

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case ProjectActionTypes.LIST:
      return { ...state, data: action.projects };
    case ProjectActionTypes.GET:
      const updatedItem = action.project;
      const index = state.data.findIndex(d => d._id === updatedItem._id);
      if (index >= 0 ) {
        const copy = [...state.data];
        copy.splice(index, 1, updatedItem);
        return { ...state, data: copy };
      }
      return { ...state, data: [...state.data, updatedItem] };
    default:
      return state;
  }
};
