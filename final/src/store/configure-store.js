import rootReducer from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export default (initialState = { projects: [] }) => {
  const composeEnhancers = (process.env.NODE_ENV === 'development')
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
};
