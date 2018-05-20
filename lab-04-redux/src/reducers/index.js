import { combineReducers } from 'redux';
import projects from './project-reducer';
import timesheets from './timesheet-reducer';

const rootReducer = combineReducers({
  projects: projects,
  timesheets: timesheets
});

export default rootReducer;
