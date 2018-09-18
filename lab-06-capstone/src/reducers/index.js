import { combineReducers } from 'redux';
import projects from './project-reducer';
import timesheets from './timesheet-reducer';
import employees from './employee-reducer';
import timeunits from './timeunit-reducer';
import auth from './auth-reducer';

const rootReducer = combineReducers({
  projects: projects,
  timesheets: timesheets,
  employees: employees,
  timeunits: timeunits,
  auth: auth
});

export default rootReducer;
