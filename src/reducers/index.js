import { combineReducers } from 'redux';
import projects from './project-reducer';
import timesheets from './timesheet-reducer';
import timeunits from './timeunit-reducer';
import employees from './employee-reducer';
import auth from './auth-reducer';

const rootReducer = combineReducers({
  projects: projects,
  timesheets: timesheets,
  timeunits: timeunits,
  employees: employees,
  auth: auth
});

export default rootReducer;
