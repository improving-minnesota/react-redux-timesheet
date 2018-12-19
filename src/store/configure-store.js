import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default (initialState = { }) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
