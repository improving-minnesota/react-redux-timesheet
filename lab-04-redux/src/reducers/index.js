import { combineReducers } from 'redux';
import projects from './project-reducer';
import timesheets from './timesheet-reducer';
import employees from './employee-reducer';

const rootReducer = combineReducers({
  projects: projects,
  timesheets: timesheets,
  employees: employees
});

export default rootReducer;
