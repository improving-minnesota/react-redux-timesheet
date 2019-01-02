import * as TimeunitActionTypes from '../actions/TimeunitActionTypes';

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case TimeunitActionTypes.LIST:
      return { ...state, data: action.timeunits };
    case TimeunitActionTypes.GET:
      const updatedItem = action.timeunit;
      const index = state.data.findIndex(d => d._id === updatedItem._id);
      if (index >= 0 ) {
        return { ...state, data: [...state.data].splice(index, 1, updatedItem) };
      }
      return { ...state, data: [...state.data, updatedItem] };
    default:
      return state;
  }
};
