import {combineReducers} from "redux";
import projects from './project-reducer';

const rootReducer = combineReducers({
  projects
});

export default rootReducer;