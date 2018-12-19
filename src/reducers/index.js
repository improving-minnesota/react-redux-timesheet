import { combineReducers } from 'redux';
import projects from './project-reducer';
import timesheets from './timesheet-reducer';
import timeunits from './timeunit-reducer';
import employees from './employee-reducer';

const rootReducer = combineReducers({
  projects: projects,
  timesheets: timesheets,
  timeunits: timeunits,
  employees: employees,
});

export default rootReducer;
