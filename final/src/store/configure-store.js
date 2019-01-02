import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

export default (initialState = { }) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
};
